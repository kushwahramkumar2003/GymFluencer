"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";

export function Steps() {
  const steps = [
    {
      number: "1",
      title: "Create Your Account",
      description:
        "Sign up and set your fitness goals to get started on your journey.",
      image: "/img2.jpg",
      features: ["Personalized profile", "Goal setting", "Progress tracking"],
    },
    {
      number: "2",
      title: "Log Your Exercises",
      description:
        "Easily log your exercises by selecting from a wide range of activities.",
      image: "/img3.jpg",
      features: [
        "Wide exercise database",
        "Custom workouts",
        "Activity history",
      ],
    },
    {
      number: "3",
      title: "Count Your Reps",
      description:
        "Count your reps with precision, ensuring every detail is logged.",
      image: "/img4.jpg",
      features: ["Accurate counting", "Set tracking", "Rest timer"],
    },
    {
      number: "4",
      title: "Track Your Progress",
      description:
        "Review your workout stats and progress over time to stay motivated.",
      image: "/img5.jpg",
      features: ["Visual analytics", "Progress reports", "Achievement badges"],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4 inline-block">
            Simple Process
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Get started with GymFluencer in four simple steps
          </p>
        </motion.div>

        <div className="space-y-24 relative">
          {/* Responsive Progress Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-300/50 to-green-300/0 hidden md:block -translate-x-1/2" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-12 relative`}
            >
              {/* Step Number for Mobile */}
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 md:hidden">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center text-xl font-bold shadow-md"
                >
                  {step.number}
                </motion.div>
              </div>

              <div className="w-full md:w-1/2 group">
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={600}
                    height={400}
                    className="rounded-2xl transform transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="h-full p-8 rounded-2xl border border-green-100 bg-white/80 backdrop-blur-sm shadow-lg relative overflow-hidden"
                >
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-green-800">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {step.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-700">
                        Key Features:
                      </h4>
                      {step.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-gray-600 hover:text-green-700 transition-colors"
                        >
                          <Check className="h-5 w-5 text-green-600" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <motion.button
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-green-700 font-medium hover:text-green-900 transition-colors"
                      >
                        Learn more
                        <ArrowRight className="h-4 w-4" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Decorative Gradient Overlay */}
                  <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-green-100/20 to-transparent rounded-full opacity-20 -z-10" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
