import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovators Inc.",
    period: "2021 - Present",
    description: "Leading development of scalable web applications using MERN stack."
  },
  {
    title: "Full Stack Developer",
    company: "WebSolutions Co.",
    period: "2018 - 2021",
    description: "Developed and maintained multiple client projects using React and Node.js."
  },
  {
    title: "Junior Web Developer",
    company: "StartUp Ventures",
    period: "2016 - 2018",
    description: "Assisted in the development of responsive websites and web applications."
  }
]

const ExperienceTimeline: React.FC = () => {
  return (
    <div className="space-y-4">
      {experiences.map((exp, index) => (
        <Card key={index} className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
          <CardContent className="p-6">
            <h3 className="font-semibold">{exp.title}</h3>
            <p className="text-sm text-muted-foreground">{exp.company} | {exp.period}</p>
            <p className="mt-2 text-sm">{exp.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default ExperienceTimeline

