interface EducationInfoProps {
  institution: string
  course: string
  startDate: string
  conclusionDate: string
}

export function EducationInfo({
  conclusionDate,
  course,
  institution,
  startDate,
}: EducationInfoProps) {
  return (
    <section className="flex flex-col gap-2">
      <div className="flex flex-col  sm:flex-row">
        <span className="text-accent-turquoise">&lt;institution&gt;</span>
        <span className="pl-7 text-white sm:pl-0">{institution}</span>
        <span className="text-accent-turquoise">&lt;/institution&gt;</span>
      </div>

      <div className="flex flex-col  sm:flex-row">
        <span className="text-accent-turquoise">&lt;course&gt;</span>
        <span className="pl-7 text-white sm:pl-0">{course}</span>
        <span className="text-accent-turquoise">&lt;/course&gt;</span>
      </div>

      <div className="flex flex-col  sm:flex-row">
        <span className="text-accent-turquoise">&lt;startDate&gt;</span>
        <span className="pl-7 text-white sm:pl-0">{startDate}</span>
        <span className="text-accent-turquoise">&lt;/startDate&gt;</span>
      </div>

      <div className="flex flex-col  sm:flex-row">
        <span className="text-accent-turquoise">&lt;conclusionDate&gt;</span>
        <span className="pl-7 text-white sm:pl-0">{conclusionDate}</span>
        <span className="text-accent-turquoise">&lt;/conclusionDate&gt;</span>
      </div>
    </section>
  )
}
