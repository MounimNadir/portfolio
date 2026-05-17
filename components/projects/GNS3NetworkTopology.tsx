import React, { useState } from 'react';
import { Shield, Server, Wifi, Globe, Lock, Zap, Network, HardDrive } from 'lucide-react';

// Interactive GNS3 Enterprise Network Topology Component
// Shows HA Cluster, Dual WAN, VLANs, VPN Tunnels with clickable zones

interface NetworkZoneProps {
  id: string;
  name: string;
  description: string;
  tech: string[];
  color: string;
}

const networkZones: NetworkZoneProps[] = [
  {
    id: 'wan',
    name: 'WAN Edge',
    description: 'Dual ISP redundancy with automatic failover and load balancing',
    tech: ['ISP1: 203.0.113.x', 'ISP2: 198.51.100.x', 'Round-Robin Distribution', '<10s Failover'],
    color: 'from-red-500 to-orange-500'
  },
  {
    id: 'ha-cluster',
    name: 'HA Cluster (CARP)',
    description: 'Redundant pfSense firewalls with sub-10 second automatic failover',
    tech: ['pfSense Master', 'pfSense Backup', 'CARP Protocol', 'pfsync + XMLRPC', 'Virtual IPs'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'lan',
    name: 'LAN (VLAN 10)',
    description: 'Corporate user workstations with full Internet and resource access',
    tech: ['192.168.10.0/24', 'DHCP Pool: .100-.200', 'Default Deny + Allow Rules'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'admin',
    name: 'Admin (VLAN 20)',
    description: 'IT administration segment with elevated privileges',
    tech: ['192.168.20.0/24', 'Management Access', 'VoIP Integration'],
    color: 'from-purple-500 to-violet-500'
  },
  {
    id: 'dmz',
    name: 'DMZ (VLAN 50)',
    description: 'Isolated public-facing servers with strict ingress/egress filtering',
    tech: ['192.168.50.0/24', 'Web/Mail Servers', 'DNAT: TCP/80→.50.10', 'RFC1918 Blocking'],
    color: 'from-yellow-500 to-amber-500'
  },
  {
    id: 'guest',
    name: 'Guest (VLAN 30)',
    description: 'Visitor WiFi with Internet-only access, no internal resources',
    tech: ['192.168.30.0/24', 'Internet Only', 'Isolated from LAN/DMZ'],
    color: 'from-gray-400 to-slate-500'
  },
  {
    id: 'vpn-ipsec',
    name: 'Site-to-Site VPN',
    description: 'Encrypted IPsec tunnels connecting HQ to remote branch offices',
    tech: ['Site A: 172.16.10.0/24', 'Site B: 172.16.20.0/24', 'IKEv1 + AES-128', 'SHA256 + DH14'],
    color: 'from-indigo-500 to-blue-600'
  },
  {
    id: 'vpn-ssl',
    name: 'Remote Access VPN',
    description: 'OpenVPN server for secure teleworker connectivity',
    tech: ['Tunnel: 10.8.0.0/24', 'OpenVPN UDP/1194', 'AES-256-GCM', 'PKI Certificates'],
    color: 'from-pink-500 to-rose-500'
  }
];

export default function GNS3NetworkTopology() {
  const [selectedZone, setSelectedZone] = useState<string | null>(null);
  const [showTrafficFlow, setShowTrafficFlow] = useState(false);

  const zone = selectedZone ? networkZones.find(z => z.id === selectedZone) : null;

  return (
    <div className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 shadow-2xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            <Network className="w-8 h-8 text-cyan-400" />
            GNS3 Enterprise Network Topology
          </h2>
          <button
            onClick={() => setShowTrafficFlow(!showTrafficFlow)}
            className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors flex items-center gap-2"
          >
            <Zap className="w-4 h-4" />
            {showTrafficFlow ? 'Hide' : 'Show'} Traffic Flow
          </button>
        </div>
        <p className="text-slate-300 text-sm">
          Click on any network zone to view technical details • Dual WAN • HA Cluster • Multi-Site VPN
        </p>
      </div>

      {/* Network Diagram */}
      <div className="relative bg-slate-800/50 rounded-xl p-8 mb-6 min-h-[600px]">
        
        {/* Internet Cloud */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-4">
            <Globe className="w-16 h-16 text-blue-400" />
            <span className="text-white font-semibold">Internet</span>
          </div>
        </div>

        {/* ISP1 and ISP2 */}
        <div className="absolute top-24 left-1/4 -translate-x-1/2">
          <button
            onClick={() => setSelectedZone('wan')}
            className={`group relative px-4 py-3 rounded-lg border-2 transition-all ${
              selectedZone === 'wan'
                ? 'border-orange-400 bg-orange-500/20 scale-110'
                : 'border-slate-600 bg-slate-700/50 hover:border-orange-400'
            }`}
          >
            <Server className="w-8 h-8 text-orange-400 mx-auto mb-1" />
            <span className="text-white text-sm font-medium">ISP1</span>
            <div className="text-xs text-slate-300">203.0.113.x</div>
          </button>
        </div>

        <div className="absolute top-24 right-1/4 translate-x-1/2">
          <button
            onClick={() => setSelectedZone('wan')}
            className={`group relative px-4 py-3 rounded-lg border-2 transition-all ${
              selectedZone === 'wan'
                ? 'border-orange-400 bg-orange-500/20 scale-110'
                : 'border-slate-600 bg-slate-700/50 hover:border-orange-400'
            }`}
          >
            <Server className="w-8 h-8 text-orange-400 mx-auto mb-1" />
            <span className="text-white text-sm font-medium">ISP2</span>
            <div className="text-xs text-slate-300">198.51.100.x</div>
          </button>
        </div>

        {/* Animated traffic lines from ISPs */}
        {showTrafficFlow && (
          <>
            <svg className="absolute top-32 left-1/4 w-1 h-24" style={{ left: 'calc(25% - 2px)' }}>
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#60a5fa" strokeWidth="3" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" from="0" to="-10" dur="1s" repeatCount="indefinite" />
              </line>
            </svg>
            <svg className="absolute top-32 right-1/4 w-1 h-24" style={{ right: 'calc(25% - 2px)' }}>
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#60a5fa" strokeWidth="3" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" from="0" to="-10" dur="1s" repeatCount="indefinite" />
              </line>
            </svg>
          </>
        )}

        {/* HA Cluster pfSense - FIXED TERNARY OPERATOR */}
        <div className="absolute top-56 left-1/2 -translate-x-1/2">
          <button
            onClick={() => setSelectedZone('ha-cluster')}
            className={`group relative px-6 py-4 rounded-xl border-2 transition-all ${
              selectedZone === 'ha-cluster'
                ? 'border-cyan-400 bg-cyan-500/20 scale-110 shadow-lg shadow-cyan-500/50'
                : 'border-slate-600 bg-slate-700/50 hover:border-cyan-400'
            }`}
          >
            <div className="flex items-center gap-3">
              <Shield className="w-10 h-10 text-cyan-400" />
              <div className="text-left">
                <div className="text-white font-bold">HA Cluster</div>
                <div className="text-xs text-cyan-300">pfSense CARP</div>
                <div className="text-xs text-slate-400">Master + Backup</div>
              </div>
            </div>
          </button>
        </div>

        {/* Core Switch */}
        <div className="absolute top-96 left-1/2 -translate-x-1/2">
          <div className="px-4 py-3 rounded-lg border-2 border-purple-400 bg-purple-500/20">
            <HardDrive className="w-8 h-8 text-purple-400 mx-auto mb-1" />
            <span className="text-white text-sm font-medium">Core Switch</span>
            <div className="text-xs text-slate-300">Cisco IOSvL2</div>
          </div>
        </div>

        {/* VLANs - positioned around core switch */}
        <div className="absolute top-[480px] left-[10%]">
          <button
            onClick={() => setSelectedZone('lan')}
            className={`px-4 py-3 rounded-lg border-2 transition-all ${
              selectedZone === 'lan'
                ? 'border-green-400 bg-green-500/20 scale-110'
                : 'border-slate-600 bg-slate-700/50 hover:border-green-400'
            }`}
          >
            <Network className="w-6 h-6 text-green-400 mx-auto mb-1" />
            <span className="text-white text-xs font-medium">LAN</span>
            <div className="text-xs text-slate-300">VLAN 10</div>
          </button>
        </div>

        <div className="absolute top-[480px] left-[30%]">
          <button
            onClick={() => setSelectedZone('admin')}
            className={`px-4 py-3 rounded-lg border-2 transition-all ${
              selectedZone === 'admin'
                ? 'border-purple-400 bg-purple-500/20 scale-110'
                : 'border-slate-600 bg-slate-700/50 hover:border-purple-400'
            }`}
          >
            <Lock className="w-6 h-6 text-purple-400 mx-auto mb-1" />
            <span className="text-white text-xs font-medium">Admin</span>
            <div className="text-xs text-slate-300">VLAN 20</div>
          </button>
        </div>

        <div className="absolute top-[480px] right-[30%]">
          <button
            onClick={() => setSelectedZone('dmz')}
            className={`px-4 py-3 rounded-lg border-2 transition-all ${
              selectedZone === 'dmz'
                ? 'border-amber-400 bg-amber-500/20 scale-110'
                : 'border-slate-600 bg-slate-700/50 hover:border-amber-400'
            }`}
          >
            <Server className="w-6 h-6 text-amber-400 mx-auto mb-1" />
            <span className="text-white text-xs font-medium">DMZ</span>
            <div className="text-xs text-slate-300">VLAN 50</div>
          </button>
        </div>

        <div className="absolute top-[480px] right-[10%]">
          <button
            onClick={() => setSelectedZone('guest')}
            className={`px-4 py-3 rounded-lg border-2 transition-all ${
              selectedZone === 'guest'
                ? 'border-slate-400 bg-slate-500/20 scale-110'
                : 'border-slate-600 bg-slate-700/50 hover:border-slate-400'
            }`}
          >
            <Wifi className="w-6 h-6 text-slate-400 mx-auto mb-1" />
            <span className="text-white text-xs font-medium">Guest</span>
            <div className="text-xs text-slate-300">VLAN 30</div>
          </button>
        </div>

        {/* VPN Tunnels */}
        <div className="absolute bottom-4 left-[15%]">
          <button
            onClick={() => setSelectedZone('vpn-ipsec')}
            className={`px-4 py-3 rounded-lg border-2 transition-all ${
              selectedZone === 'vpn-ipsec'
                ? 'border-indigo-400 bg-indigo-500/20 scale-110'
                : 'border-slate-600 bg-slate-700/50 hover:border-indigo-400'
            }`}
          >
            <Lock className="w-6 h-6 text-indigo-400 mx-auto mb-1" />
            <span className="text-white text-xs font-medium">IPsec VPN</span>
            <div className="text-xs text-slate-300">Site A & B</div>
          </button>
        </div>

        <div className="absolute bottom-4 right-[15%]">
          <button
            onClick={() => setSelectedZone('vpn-ssl')}
            className={`px-4 py-3 rounded-lg border-2 transition-all ${
              selectedZone === 'vpn-ssl'
                ? 'border-rose-400 bg-rose-500/20 scale-110'
                : 'border-slate-600 bg-slate-700/50 hover:border-rose-400'
            }`}
          >
            <Lock className="w-6 h-6 text-rose-400 mx-auto mb-1" />
            <span className="text-white text-xs font-medium">OpenVPN</span>
            <div className="text-xs text-slate-300">Remote Access</div>
          </button>
        </div>

      </div>

      {/* Zone Details Panel */}
      {zone && (
        <div className={`bg-gradient-to-r ${zone.color} p-6 rounded-xl text-white animate-fadeIn`}>
          <h3 className="text-2xl font-bold mb-2">{zone.name}</h3>
          <p className="text-white/90 mb-4">{zone.description}</p>
          <div className="grid grid-cols-2 gap-2">
            {zone.tech.map((tech, index) => (
              <div key={index} className="bg-black/20 px-3 py-2 rounded-lg text-sm">
                • {tech}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="mt-6 grid grid-cols-4 gap-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
          <span className="text-slate-300">HA Cluster</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          <span className="text-slate-300">Internal Network</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
          <span className="text-slate-300">DMZ Zone</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
          <span className="text-slate-300">VPN Tunnels</span>
        </div>
      </div>
    </div>
  );
}