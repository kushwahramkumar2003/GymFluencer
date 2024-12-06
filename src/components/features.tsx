'use client'

import { motion } from "framer-motion"
import { Activity, BarChart3, Dumbbell, Utensils } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export function Features() {
  const features = [
    {
      icon: <Dumbbell className="h-10 w-10" />,
      title: "Effortless Workout Logging",
      description: "Easily log your workouts and monitor your progress over time with our intuitive logging feature."
    },
    {
      icon: <Activity className="h-10 w-10" />,
      title: "Accurate Rep Counting",
      description: "Count your reps accurately with our app, ensuring each workout is tracked effectively."
    },
    {
      icon: <BarChart3 className="h-10 w-10" />,
      title: "Calorie Calculation",
      description: "Calculate calories burned during your workouts to help manage your fitness goals."
    },
    {
      icon: <Utensils className="h-10 w-10" />,
      title: "Personalized Plans",
      description: "Get customized workout and diet plans tailored to your specific goals and preferences."
    }
  ]

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Features That Set Us Apart
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover why GymFluencer is the perfect companion for your fitness journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6 mx-auto text-primary-foreground">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">{feature.title}</h3>
                  <p className="text-muted-foreground text-center">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

