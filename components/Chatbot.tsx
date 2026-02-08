'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'
import { faqData } from '@/components/sections/FAQ'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Array<{ type: 'user' | 'bot'; content: string }>>([
    {
      type: 'bot',
      content: 'Hello! I am here to help answer questions about Fiza Saif\'s services. What would you like to know?',
    },
  ])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const findAnswer = (question: string): string | null => {
    const lowerQuestion = question.toLowerCase()
    
    // Simple keyword matching
    for (const faq of faqData) {
      const faqKeywords = faq.question.toLowerCase().split(' ')
      const questionWords = lowerQuestion.split(' ')
      
      // Check if at least 2 keywords match
      const matches = faqKeywords.filter(keyword => 
        questionWords.some(word => word.includes(keyword) || keyword.includes(word))
      )
      
      if (matches.length >= 2 || lowerQuestion.includes(faq.question.toLowerCase().split(' ')[0])) {
        return faq.answer
      }
    }

    // Fallback responses based on keywords
    if (lowerQuestion.includes('service') || lowerQuestion.includes('offer') || lowerQuestion.includes('do')) {
      return faqData[0].answer
    }
    if (lowerQuestion.includes('time') || lowerQuestion.includes('long') || lowerQuestion.includes('duration')) {
      return faqData[1].answer
    }
    if (lowerQuestion.includes('international') || lowerQuestion.includes('remote') || lowerQuestion.includes('location')) {
      return faqData[2].answer
    }
    if (lowerQuestion.includes('technology') || lowerQuestion.includes('tech') || lowerQuestion.includes('stack') || lowerQuestion.includes('use')) {
      return faqData[3].answer
    }
    if (lowerQuestion.includes('communicat') || lowerQuestion.includes('update') || lowerQuestion.includes('contact')) {
      return faqData[4].answer
    }
    if (lowerQuestion.includes('start') || lowerQuestion.includes('begin') || lowerQuestion.includes('get started')) {
      return faqData[9].answer
    }
    if (lowerQuestion.includes('support') || lowerQuestion.includes('maintenance') || lowerQuestion.includes('ongoing')) {
      return faqData[7].answer
    }
    if (lowerQuestion.includes('process') || lowerQuestion.includes('work') || lowerQuestion.includes('approach')) {
      return faqData[6].answer
    }

    return null
  }

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = input.trim()
    setMessages(prev => [...prev, { type: 'user', content: userMessage }])
    setInput('')

    // Simulate bot thinking
    setTimeout(() => {
      const answer = findAnswer(userMessage)
      
      if (answer) {
        setMessages(prev => [...prev, { type: 'bot', content: answer }])
      } else {
        setMessages(prev => [...prev, {
          type: 'bot',
          content: 'I can help answer questions about services, timelines, technologies, communication, and more. Could you rephrase your question, or would you like to contact Fiza directly through the contact form?',
        }])
      }
    }, 500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const quickQuestions = [
    'What services do you offer?',
    'How long does a project take?',
    'Do you work internationally?',
    'What technologies do you use?',
  ]

  return (
    <>
      {/* Chatbot Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-accent text-white rounded-full shadow-soft-lg flex items-center justify-center hover:bg-accent-hover transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            '0 4px 20px rgba(79, 124, 255, 0.4)',
            '0 4px 30px rgba(79, 124, 255, 0.6)',
            '0 4px 20px rgba(79, 124, 255, 0.4)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        {isOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <MessageCircle size={20} className="sm:w-6 sm:h-6" />}
      </motion.button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 h-[500px] sm:h-[600px] bg-background-secondary border border-background-primary rounded-xl shadow-soft-lg flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-3 sm:px-4 py-2 sm:py-3 bg-background-primary border-b border-background-primary flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-accent rounded-full flex items-center justify-center">
                  <Bot size={16} className="sm:w-[18px] sm:h-[18px] text-white" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-text-primary">FAQ Assistant</h3>
                  <p className="text-[10px] sm:text-xs text-text-secondary">Ask me anything</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-1.5 sm:gap-2 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.type === 'bot' && (
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot size={12} className="sm:w-3.5 sm:h-3.5 text-accent" />
                    </div>
                  )}
                  <div
                    className={`max-w-[85%] sm:max-w-[80%] rounded-xl px-2.5 sm:px-3 py-1.5 sm:py-2 ${
                      message.type === 'user'
                        ? 'bg-accent text-white'
                        : 'bg-background-primary text-text-secondary'
                    }`}
                  >
                    <p className="text-xs sm:text-sm leading-relaxed">{message.content}</p>
                  </div>
                  {message.type === 'user' && (
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <User size={12} className="sm:w-3.5 sm:h-3.5 text-accent" />
                    </div>
                  )}
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="px-3 sm:px-4 py-2 border-t border-background-primary">
                <p className="text-[10px] sm:text-xs text-text-secondary mb-1.5 sm:mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {quickQuestions.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setInput(q)
                        inputRef.current?.focus()
                      }}
                      className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 bg-background-primary text-text-secondary rounded-lg hover:bg-accent/10 hover:text-accent transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-3 sm:p-4 border-t border-background-primary">
              <div className="flex gap-1.5 sm:gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your question..."
                  className="flex-1 px-2.5 sm:px-3 py-1.5 sm:py-2 bg-background-primary border border-background-primary rounded-lg text-text-primary text-xs sm:text-sm placeholder-text-secondary/50 focus:outline-none focus:border-accent transition-colors"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
