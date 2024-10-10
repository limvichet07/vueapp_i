// src/i18n.js
import { createI18n } from 'vue-i18n'

// Define messages for each locale
const messages = {
  en: {
    english: "english",
    khmer: "khmer",
    welcome: 'Welcome',
    message: 'Hello World',
    write: "Write code for the joy of it.",
    for: "For a guide and recipes on how to configure / customize this project, check out the laravel-cli documentation.",
    ins: "Installed CLI Plugins"
  },
  km: {
    english: "អង្គគ្លេស",
    khmer: "ខ្មែរ",
    welcome: 'សូមស្វាគមន៍',
    message: 'សួស្ដី ពិភពលោក',
    write: "សរសេរកូដសម្រាប់សេចក្តីរីករាយរបស់វា។",
    for: "សម្រាប់ការណែនាំ និងរូបមន្តអំពីរបៀបកំណ,ត់រចនាសម្ព័ន្ធ/ប្ដូរគម្រោងនេះតាមបំណង។ពិនិត្យមើលឯកសារ laravel-cli ។",
    ins: "បានដំឡើងកម្មវិធីជំនួយ CLI"
  }
}

// Create i18n instance with options
const i18n = createI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
})

export default i18n