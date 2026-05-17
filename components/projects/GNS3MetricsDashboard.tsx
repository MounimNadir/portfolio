import React, { useState, useEffect } from 'react';
import { TrendingUp, Shield, Zap, Clock, Server, Lock, CheckCircle, Activity } from 'lucide-react';

// Animated Metrics Dashboard for GNS3 Enterprise Network Project

interface MetricCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  unit?: string;
  color: string;
  delay: number;
}

const MetricCard: React.FC<MetricCardProps> = ({ icon, label, value, unit, color, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`bg-gradient-to-br ${color} p-6 rounded-xl shadow-lg transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-white/20 rounded-lg">
          {icon}
        </div>
      </div>
      <div className="text-4xl font-bold text-white mb-2">
        {value}
        {unit && <span className="text-2xl ml-1">{unit}</span>}
      </div>
      <div className="text-white/80 text-sm font-medium">{label}</div>
    </div>
  );
};

export default function GNS3MetricsDashboard() {
  return (
    <div className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 shadow-2xl">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
          <Activity className="w-8 h-8 text-cyan-400" />
          Performance & Security Metrics
        </h2>
        <p className="text-slate-300 text-sm">
          Quantified results from comprehensive testing and validation scenarios
        </p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          icon={<Zap className="w-6 h-6 text-white" />}
          label="pfSense HA Failover Time"
          value="<10"
          unit="sec"
          color="from-blue-500 to-cyan-500"
          delay={100}
        />
        <MetricCard
          icon={<Clock className="w-6 h-6 text-white" />}
          label="WAN Dual ISP Failover"
          value="~10"
          unit="sec"
          color="from-green-500 to-emerald-500"
          delay={200}
        />
        <MetricCard
          icon={<TrendingUp className="w-6 h-6 text-white" />}
          label="Network Uptime"
          value="99.9"
          unit="%+"
          color="from-purple-500 to-violet-500"
          delay={300}
        />
        <MetricCard
          icon={<Lock className="w-6 h-6 text-white" />}
          label="VPN Tunnels Deployed"
          value="3"
          unit=""
          color="from-indigo-500 to-blue-600"
          delay={400}
        />
      </div>

      {/* Architecture Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
          <Server className="w-8 h-8 text-amber-400 mb-3" />
          <div className="text-2xl font-bold text-white mb-2">4</div>
          <div className="text-slate-300 text-sm">Network Segments (VLANs)</div>
          <div className="mt-3 space-y-1 text-xs text-slate-400">
            <div>• VLAN 10: Users</div>
            <div>• VLAN 20: Admin</div>
            <div>• VLAN 50: DMZ</div>
            <div>• VLAN 30: Guest</div>
          </div>
        </div>

        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
          <Shield className="w-8 h-8 text-red-400 mb-3" />
          <div className="text-2xl font-bold text-white mb-2">20+</div>
          <div className="text-slate-300 text-sm">Firewall Rules</div>
          <div className="mt-3 space-y-1 text-xs text-slate-400">
            <div>• Default Deny Policy</div>
            <div>• DMZ Isolation</div>
            <div>• VPN Access Control</div>
            <div>• Port Forwarding</div>
          </div>
        </div>

        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
          <Activity className="w-8 h-8 text-green-400 mb-3" />
          <div className="text-2xl font-bold text-white mb-2">5</div>
          <div className="text-slate-300 text-sm">Security Zones</div>
          <div className="mt-3 space-y-1 text-xs text-slate-400">
            <div>• WAN Edge</div>
            <div>• LAN Internal</div>
            <div>• DMZ Public</div>
            <div>• Guest WiFi</div>
            <div>• VPN Remote</div>
          </div>
        </div>
      </div>

      {/* Business Impact Section */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6 rounded-xl mb-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <CheckCircle className="w-6 h-6" />
          Business Impact & Value Delivered
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
            <div className="text-white font-bold mb-2">🔒 Zero Security Breaches</div>
            <div className="text-white/80 text-sm">
              Complete DMZ isolation validated - 100% blocking of unauthorized DMZ→LAN traffic attempts
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
            <div className="text-white font-bold mb-2">⚡ Instant Failover</div>
            <div className="text-white/80 text-sm">
              Sub-10-second recovery from pfSense Master failure with zero active session drops
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
            <div className="text-white font-bold mb-2">🌐 Multi-Site Connectivity</div>
            <div className="text-white/80 text-sm">
              3 geographically distributed sites interconnected via encrypted IPsec tunnels
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
            <div className="text-white font-bold mb-2">💼 Remote Workforce Ready</div>
            <div className="text-white/80 text-sm">
              Secure telework infrastructure with OpenVPN + PKI certificate authentication
            </div>
          </div>
        </div>
      </div>

      {/* Testing Validation */}
      <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
        <h3 className="text-xl font-bold text-white mb-4">Comprehensive Testing & Validation</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400">7</div>
            <div className="text-slate-300 text-sm mt-1">Test Scenarios</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">23</div>
            <div className="text-slate-300 text-sm mt-1">Technical Diagrams</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400">28</div>
            <div className="text-slate-300 text-sm mt-1">Report Pages</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400">3</div>
            <div className="text-slate-300 text-sm mt-1">Sites Connected</div>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
          <div className="flex items-center gap-2 text-green-400">
            <CheckCircle className="w-4 h-4" />
            <span>CARP Failover Validated</span>
          </div>
          <div className="flex items-center gap-2 text-green-400">
            <CheckCircle className="w-4 h-4" />
            <span>WAN Redundancy Tested</span>
          </div>
          <div className="flex items-center gap-2 text-green-400">
            <CheckCircle className="w-4 h-4" />
            <span>DMZ Isolation Confirmed</span>
          </div>
          <div className="flex items-center gap-2 text-green-400">
            <CheckCircle className="w-4 h-4" />
            <span>Guest Network Isolated</span>
          </div>
          <div className="flex items-center gap-2 text-green-400">
            <CheckCircle className="w-4 h-4" />
            <span>Port Forwarding Working</span>
          </div>
          <div className="flex items-center gap-2 text-green-400">
            <CheckCircle className="w-4 h-4" />
            <span>VPN Tunnels Operational</span>
          </div>
        </div>
      </div>
    </div>
  );
}