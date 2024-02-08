'use client'

import { Content, Header, Item, Root } from '@radix-ui/react-accordion'
import { ChevronRight, Code2, Folder } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

import { AccordionTriggerNavigation } from '../ui/accordion-trigger-navigation'

const navLinks = [
  {
    name: 'bio',
    href: '/about/bio',
    icon: <Code2 width={14} />,
  },
  {
    name: 'education',
    href: '/about/education',
    icon: <Code2 width={14} />,
  },
]

export function AboutNavigation() {
  const pathname = usePathname()

  return (
    <Root type="multiple" className="flex flex-col gap-1">
      <Item value="personal-info">
        <Header>
          <AccordionTriggerNavigation>personal-info</AccordionTriggerNavigation>
        </Header>

        <Content className="overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
          <ul className="flex flex-col gap-1 pb-4 pl-14 pt-4">
            {navLinks.map((navLink) => {
              return (
                <li key={navLink.name} className="flex items-center gap-3">
                  <Link
                    href={navLink.href}
                    className={twMerge(
                      'flex items-center gap-2 text-secondary-slate-grey',
                      pathname === navLink.href && 'text-white',
                    )}
                  >
                    {navLink.icon}
                    {navLink.name}.me
                  </Link>
                </li>
              )
            })}
          </ul>
        </Content>
      </Item>

      <Item value="2">
        <Header>
          <AccordionTriggerNavigation>
            professional-info
          </AccordionTriggerNavigation>
        </Header>

        <Content className="overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
          <ul className="flex flex-col gap-1 pb-4 pl-7 pt-4">
            <li className="flex items-center gap-3">
              <ChevronRight width={16} className="text-secondary-slate-grey" />
              <Link
                href=""
                className="flex items-center gap-2 text-secondary-slate-grey"
              >
                <Folder
                  className="text-accent-salmon"
                  width={14}
                  fill="#E99287"
                />{' '}
                bio
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <ChevronRight width={16} className="text-secondary-slate-grey" />
              <Link
                href=""
                className="flex items-center gap-2 text-secondary-slate-grey"
              >
                <Folder
                  className="text-accent-turquoise"
                  width={14}
                  fill="#43D9AD"
                />{' '}
                bio
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <ChevronRight width={16} className="text-secondary-slate-grey" />
              <Link
                href=""
                className="flex items-center gap-2 text-secondary-slate-grey"
              >
                <Folder
                  className="text-secondary-purple"
                  width={14}
                  fill="#3A49A4"
                />{' '}
                bio
              </Link>
            </li>
          </ul>
        </Content>
      </Item>

      <Item value="3">
        <Header>
          <AccordionTriggerNavigation>hobbies</AccordionTriggerNavigation>
        </Header>

        <Content className="overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
          <ul className="flex flex-col gap-1 pl-7 pt-4">
            <li className="flex items-center gap-3">
              <ChevronRight width={16} className="text-secondary-slate-grey" />
              <Link
                href=""
                className="flex items-center gap-2 text-secondary-slate-grey"
              >
                <Folder
                  className="text-accent-salmon"
                  width={14}
                  fill="#E99287"
                />{' '}
                bio
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <ChevronRight width={16} className="text-secondary-slate-grey" />
              <Link
                href=""
                className="flex items-center gap-2 text-secondary-slate-grey"
              >
                <Folder
                  className="text-accent-turquoise"
                  width={14}
                  fill="#43D9AD"
                />{' '}
                bio
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <ChevronRight width={16} className="text-secondary-slate-grey" />
              <Link
                href=""
                className="flex items-center gap-2 text-secondary-slate-grey"
              >
                <Folder
                  className="text-secondary-purple"
                  width={14}
                  fill="#3A49A4"
                />{' '}
                bio
              </Link>
            </li>
          </ul>
        </Content>
      </Item>
    </Root>
  )
}
