export function resolveHref(
  documentType?: string,
  slug?: string
): string | undefined {
  switch (documentType) {
    case 'home':
      return '/'
    case 'about':
      return '/about'
    case 'stack':
      return '/techStack'
    case 'blog':
      return '/blog'
    case 'projects':
      return '/projects'
    case 'project':
      return slug ? `/projects/${slug}` : undefined
    default:
      console.warn('Invalid document type:', documentType)
      return undefined
  }
}
