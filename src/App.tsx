import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import ActionItems from '@/pages/ActionItems'
import AIAssistant from '@/pages/AIAssistant'
import Dashboard from '@/pages/Dashboard'
import KnowledgeBase from '@/pages/KnowledgeBase'
import Meetings from '@/pages/Meetings'
import RiskRadar from '@/pages/RiskRadar'
import Settings from '@/pages/Settings'
import WorkTransfers from '@/pages/WorkTransfers'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/meetings" element={<Meetings />} />
          <Route path="/action-items" element={<ActionItems />} />
          <Route path="/work-transfers" element={<WorkTransfers />} />
          <Route path="/knowledge" element={<KnowledgeBase />} />
          <Route path="/ai-assistant" element={<AIAssistant />} />
          <Route path="/risk-radar" element={<RiskRadar />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
