import { EducationInfo } from '@/components/about/education-info'

export default function EducationPage() {
  return (
    <div>
      <h3 className="flex items-center gap-3 font-light text-white">
        // education
      </h3>

      {/* university */}

      <section className="mt-5">
        <h4 className="mb-2 text-secondary-slate-grey">
          {'{/* university education */}'}
        </h4>
        <EducationInfo
          institution="Universidade Estácio de Sá"
          course="Análise e desenvolvimento de sistemas"
          startDate="jan/2019"
          conclusionDate="ago/2022"
        />
      </section>

      {/* certifications */}
      <section className="mt-10">
        <h4 className="mb-2 text-secondary-slate-grey">
          {'{/* certifications */}'}
        </h4>

        <div className="flex flex-col gap-10">
          <EducationInfo
            institution="Rocketseat"
            course="ReactJS"
            startDate="jun/2023"
            conclusionDate="out/2023"
          />

          <EducationInfo
            institution="Coursera"
            course="Fundamentos técnicos da nuvem da AWS"
            startDate="out/2023"
            conclusionDate="dec/2023"
          />
          <EducationInfo
            institution="freeCodeCamp"
            course="Responsive Web Design"
            startDate="jul/2021"
            conclusionDate="set/2021"
          />
          <EducationInfo
            institution="Open English"
            course="english course"
            startDate="fev/2022"
            conclusionDate="em andamento"
          />
        </div>
      </section>
    </div>
  )
}
