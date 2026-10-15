import {
  Atom,
  Box,
  Brush,
  Factory,
  FlaskConical,
  LayoutTemplate,
  Microscope,
  PackageOpen,
  Pipette,
  ScanLine,
  ShoppingBag,
  Store,
  Syringe,
  Target,
  TestTube,
  Timer,
  Users,
  Wrench,
  FileText,
  type LucideIcon,
} from 'lucide-react'

/**
 * Icons a research category can use. Sanity stores the name; add an entry
 * here to make a new icon selectable in the Studio.
 */
export const RESEARCH_ICONS: Record<string, LucideIcon> = {
  Atom,
  Box,
  Brush,
  Factory,
  FlaskConical,
  LayoutTemplate,
  Microscope,
  PackageOpen,
  Pipette,
  ScanLine,
  ShoppingBag,
  Store,
  Syringe,
  Target,
  TestTube,
  Timer,
  Users,
  Wrench,
  FileText,
}

export function researchIcon(name?: string): LucideIcon {
  return (name && RESEARCH_ICONS[name]) || FileText
}
