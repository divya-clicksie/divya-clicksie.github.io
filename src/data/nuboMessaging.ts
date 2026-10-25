export const nuboSharing = {
  overview: 'Invite as many caregivers as you need. The primary caregiver decides what each person can see.',
  pumping: 'Pumping records are always private and are never shared with other caregivers.',
  nursing: 'For each caregiver, the primary caregiver can share nursing side and time per side, or keep those details private and share only total nursing time.',
  vault: 'The primary caregiver chooses whether to share Care Vault information, including insurance and doctor details, and how much each caregiver can access.',
  visits: 'The primary caregiver chooses whether to share doctor visit data, and how much each caregiver can access.',
};

export const nuboStory = {
  description: "Nubo helps parents keep track of everyday care, save what they notice, and return to their pediatrician's answers, with shared details for invited caregivers.",
  intelligence: 'Nubo Intelligence is the built-in AI across the Nubo app. It helps you log everyday care, understands observations in your own words, follows up on symptoms you describe, and summarizes relevant observations for doctor visits. It also highlights recorded patterns. Nubo Scribe turns doctor recordings into recaps, and Nubo Coordinator keeps reviewed next steps together for invited caregivers.',
  observations: 'Nubo Observations is a place for anything you notice about your baby that does not fit a button or form. Speak or type in your own words. Nubo Intelligence understands the context, follows up on symptoms you describe, and summarizes relevant observations for your doctor visit.',
  care: 'Nubo Care helps you prepare questions, record doctor visits with Nubo Scribe, and follow through together with Nubo Coordinator. Record with permission, then return to answers and next steps. Included in Nubo Plus.',
  scribe: 'Nubo Scribe helps you record doctor visits with permission and turns the conversation into a recap, answers, and next steps. Answers from recordings link to the original audio on the recording phone.',
  coordinator: 'Nubo Coordinator keeps reviewed next steps and to-dos together for caregivers with access. The primary caregiver decides which visit details each caregiver can see.',
  plus: 'Nubo Plus is the paid app plan. It includes Nubo Care, Nubo Noticed all week, and additional tools such as reminders, charts, and exports.',
  device: 'Nubo Remote is an optional one-tap baby tracker with dedicated buttons for feeds, sleep, and diapers. It syncs with the app over Bluetooth.',
};

export const nuboProducts = [
  {
    name: 'Nubo Care',
    label: 'For doctor visits',
    description: 'Bring your questions. Record with permission. Come back to the answers and share next steps.',
    access: 'Included in Nubo Plus. Recording and recaps in English.',
    href: '/care/',
    link: 'Explore Nubo Care',
  },
  {
    name: 'Nubo Intelligence',
    label: 'Everyday care and doctor visits',
    description: 'Built-in AI for everyday logging, symptom follow-ups, observation summaries for doctor visits, recorded patterns, Nubo Scribe recordings, and Nubo Coordinator next steps.',
    access: 'Voice logging and observations stay free. More tools with Plus.',
    href: '/app/#intelligence',
    link: 'Explore Nubo Intelligence',
  },
];

export const nuboAccess = {
  noticed: 'Nubo Noticed is included with Nubo Plus and is free for everyone on Mondays.',
  observations: 'Nubo Observations AI titles and tags require iOS 26 or later with Apple Intelligence available. Other devices preserve the note text with a simpler title and no AI tags.',
  preview: 'Your 14-day Nubo Plus preview starts when you confirm your child is here. Downloading and creating a profile do not start it. The preview is separate from a subscription.',
  device: 'Each phone that syncs with a Nubo Remote receives a refreshed 30-day Nubo Plus access window, including Nubo Care.',
};

export const nuboProcessing = {
  voice: 'In-app speech recognition and voice event interpretation run on your phone, including offline.',
  care: 'Nubo Care sends selected visit content for requested server processing. Nubo and its processing providers retain no visit data after processing.',
  careRecords: `${nuboSharing.visits} Visit summaries, answers, and to-dos sync according to those permissions. Original visit audio stays on the recording phone and is not synced to caregivers.`,
  backup: 'Optional backups use your own iCloud or Google Drive account.',
  alexa: "Alexa voice requests use Amazon's Alexa systems, separately from in-app voice logging.",
};
