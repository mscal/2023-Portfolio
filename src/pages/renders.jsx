import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import Image from 'next/image'
import blade from '@/images/michael-scalia-4kcamera2049.jpg'
import poke from '@/images/pokeball.jpg'
import chair from '@/images/chair.jpg'
import staff from '@/images/wiz-staff.jpg'
import grass from '@/images/grass.jpg'
import blackhole from '@/images/blackhole.png'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Renders - 2023</title>
        <meta name="description" content="3D Renders" />
      </Head>
      <SimpleLayout
        title="3D Rendering & Animation"
        intro="I'm enjoying the creative process of creating lifelike 3D scenes and objects. "
      >
        <div className="space-y-20">
          <ToolsSection title="Self Creation">
            <Tool title="Pokeball">
              <a
                href="https://www.artstation.com/artwork/k4RBqy"
                target="_blank"
              >
                <Image
                  width={'100%'}
                  height={'200%'}
                  className="rounded-xl transition transition-shadow delay-150 ease-in-out hover:-translate-y-1 hover:scale-105"
                  src={poke}
                />
              </a>
            </Tool>
            <Tool title="Grass Time">
              <a
                href="https://www.artstation.com/artwork/KaPY9x"
                target="_blank"
              >
                <Image
                  width={'100%'}
                  height={'200%'}
                  className="rounded-xl transition transition-shadow delay-150 ease-in-out hover:-translate-y-1 hover:scale-105"
                  src={grass}
                />
              </a>
            </Tool>
            <Tool title="Bladerunner 2049 Viewfinder">
              <a
                href="https://www.artstation.com/artwork/xzmGr1"
                target="_blank"
              >
                <Image
                  width={'100%'}
                  height={'200%'}
                  className="rounded-xl transition transition-shadow delay-150 ease-in-out hover:-translate-y-1 hover:scale-105"
                  src={blade}
                />
              </a>
            </Tool>
            <Tool title="My Chair">
              <a
                href="https://www.artstation.com/artwork/4bwxgl"
                target="_blank"
              >
                <Image
                  width={'100%'}
                  height={'200%'}
                  className="rounded-xl transition transition-shadow delay-150 ease-in-out hover:-translate-y-1 hover:scale-105"
                  src={chair}
                />
              </a>
            </Tool>
            <Tool title="Staff">
              <a
                href="https://www.artstation.com/artwork/Yayzr3"
                target="_blank"
              >
                <Image
                  width={'100%'}
                  height={'200%'}
                  className="rounded-xl transition transition-shadow delay-150 ease-in-out hover:-translate-y-1 hover:scale-105"
                  src={staff}
                />
              </a>
            </Tool>
          </ToolsSection>
          <ToolsSection title="Tutorial Work">
            <Tool title="Collection of work based on tutorials">
              <a
                href="https://photos.google.com/share/AF1QipNkkTpPQ8UcJAPymYDjJtDNyCqfxi2Keyq8DkLdPqUEkuHLklZvEVUvTrCePVzlDg?key=cVRDTTBxeDF1eExYYjFZRnhQdzFzcXVfbzllNXN3"
                target="_blank"
              >
                <Image
                  width={'100%'}
                  height={'200%'}
                  className="rounded-xl transition transition-shadow delay-150 ease-in-out hover:-translate-y-1 hover:scale-105"
                  src={blackhole}
                />
              </a>
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
