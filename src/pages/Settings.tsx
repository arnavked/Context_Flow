import { Settings as SettingsIcon } from 'lucide-react'
import { Card } from '@/components/common/Card'
import { PlaceholderPage } from '@/components/common/PlaceholderPage'
import { UserAvatar } from '@/components/common/UserAvatar'
import { currentUser } from '@/data/dashboard'

export default function Settings() {
  return (
    <PlaceholderPage
      icon={SettingsIcon}
      title="Settings"
      description="Manage your profile, notifications and workspace preferences. Settings aren't editable yet."
      features={[
        {
          title: 'Profile',
          description: 'Update your name, role and how teammates see you.',
        },
        {
          title: 'Notifications',
          description: 'Choose which updates reach you and how often.',
        },
        {
          title: 'Workspace',
          description: 'Configure team preferences and integrations.',
        },
      ]}
    >
      <Card className="flex items-center gap-4 p-5">
        <UserAvatar user={currentUser} size="lg" />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-ink">{currentUser.name}</p>
          <p className="truncate text-sm text-ink-muted">
            {currentUser.role} · {currentUser.email}
          </p>
          <p className="mt-0.5 text-xs text-ink-muted">Sample profile (no sign-in yet)</p>
        </div>
      </Card>
    </PlaceholderPage>
  )
}
