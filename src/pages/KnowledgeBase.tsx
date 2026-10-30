import { BookOpen, Search } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import { Card } from '@/components/common/Card'
import { PlaceholderPage } from '@/components/common/PlaceholderPage'

export default function KnowledgeBase() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q')?.trim()

  return (
    <PlaceholderPage
      icon={BookOpen}
      title="Knowledge Base"
      description="A shared library of decisions, meeting recaps and team know-how with semantic search. Search isn't built yet."
      features={[
        {
          title: 'Team knowledge',
          description: 'Recaps and decisions are saved automatically and stay easy to find.',
        },
        {
          title: 'Semantic search',
          description: 'Ask in plain language and find relevant notes, not just keyword matches.',
        },
        {
          title: 'Linked context',
          description: 'Jump from a decision to the meeting and tasks behind it.',
        },
      ]}
    >
      {query && (
        <Card className="flex items-start gap-3 p-5">
          <Search className="mt-0.5 size-5 shrink-0 text-ink-muted" aria-hidden />
          <p className="min-w-0 break-words text-sm text-ink">
            You searched for <span className="font-semibold">&ldquo;{query}&rdquo;</span>. Search
            results will appear here once the knowledge base is built.
          </p>
        </Card>
      )}
    </PlaceholderPage>
  )
}
