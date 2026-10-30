import type { User } from '@/types'
import { cn, getInitials } from '@/lib/utils'

type AvatarSize = 'sm' | 'md' | 'lg'

const sizeClasses: Record<AvatarSize, string> = {
  sm: 'size-6 text-[10px]',
  md: 'size-8 text-xs',
  lg: 'size-10 text-sm',
}

interface UserAvatarProps {
  user: Pick<User, 'name' | 'avatarColor'>
  size?: AvatarSize
  className?: string
}

export function UserAvatar({ user, size = 'md', className }: UserAvatarProps) {
  return (
    <span
      role="img"
      aria-label={user.name}
      title={user.name}
      style={{ backgroundColor: user.avatarColor }}
      className={cn(
        'inline-flex shrink-0 select-none items-center justify-center rounded-full font-semibold text-white',
        sizeClasses[size],
        className,
      )}
    >
      {getInitials(user.name)}
    </span>
  )
}

interface AvatarStackProps {
  users: Pick<User, 'id' | 'name' | 'avatarColor'>[]
  max?: number
  className?: string
}

export function AvatarStack({ users, max = 3, className }: AvatarStackProps) {
  const visible = users.slice(0, max)
  const hidden = users.length - visible.length

  return (
    <div className={cn('flex shrink-0 items-center -space-x-1.5', className)}>
      {visible.map((user) => (
        <UserAvatar key={user.id} user={user} size="sm" className="size-7 ring-2 ring-surface" />
      ))}
      {hidden > 0 && (
        <span className="inline-flex size-7 items-center justify-center rounded-full bg-canvas text-[10px] font-semibold text-ink-muted ring-2 ring-surface">
          +{hidden}
        </span>
      )}
    </div>
  )
}
