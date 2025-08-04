import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const res = await fetch('https://art-portfoilo-backend-production.up.railway.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setStatus('Message sent successfully!')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus(data.error || 'Something went wrong.')
      }
    } catch (error) {
      setStatus('Failed to send. Server might be down.')
    }
  }

  return (
    <div>
      <Navbar />
      <section className="contact p-8 mt-8 max-w-xl mx-auto" data-aos="fade-in" data-aos-delay="200">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <motion.input
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="border contact-field p-2 inline-block w-full"
            required
          />
          <motion.input
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="border contact-field p-2 inline-block w-full"
            required
          />
          <motion.textarea
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="border contact-field p-2 inline-block w-full "
            rows="5"
            required
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{scale: 0.95, y:2}}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            type="submit"
            className="contact-btn py-2 px-4"
          >
            Send Message
          </motion.button>
          <p className="text-sm text-gray-600 mt-2">{status}</p>
        </form>
      </section>
    </div>
  )
}
