export interface NavLink {
  href: string
  label: string
}

export interface ServiceItem {
  icon: string
  title: string
  desc: string
}

export interface KPIItem {
  value: number
  suffix: string
  label: string
}

export interface PortfolioItem {
  category: string
  title: string
  desc: string
  tag: string
}

export interface TestimonialItem {
  name: string
  role: string
  text: string
}

export interface FAQItem {
  q: string
  a: string
}
