export const nuboStory = {
  description: "Nubo helps parents keep track of everyday care, save what they notice, and return to their pediatrician's answers, with shared details for invited caregivers.",
  intelligence: 'Nubo Intelligence helps turn speech into logs, organize observations, and highlight supported patterns in recorded care. Features are available across Free and Plus.',
  care: 'Nubo Care helps you prepare questions, record pediatrician visits with permission, and return to answers and next steps. Included in Nubo Plus.',
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
    label: 'Between visits',
    description: 'Say what happened. Save what you notice. See what is changing in the days you have recorded.',
    access: 'Voice logging and observations stay free. More tools with Plus.',
    href: '/app/#intelligence',
    link: 'Explore Nubo Intelligence',
  },
];

export const nuboAccess = {
  noticed: 'Nubo Noticed is included with Nubo Plus and is free for everyone on Mondays.',
  notetaker: 'Nubo Notetaker AI titles and tags require iOS 26 or later with Apple Intelligence available. Other devices preserve the note text with a simpler title and no AI tags.',
  preview: 'Your 14-day Nubo Plus preview starts when you confirm your child is here. Downloading and creating a profile do not start it. The preview is separate from a subscription.',
  device: 'Each phone that syncs with a Nubo Remote receives a refreshed 30-day Nubo Plus access window, including Nubo Care.',
};

export const nuboProcessing = {
  voice: 'In-app speech recognition and voice event interpretation run on your phone, including offline.',
  care: 'Nubo Care sends selected visit content for requested server processing. Nubo and its processing providers retain no visit data after processing.',
  careRecords: 'Visit summaries, answers, and to-dos sync to invited caregivers. Original visit audio stays on the recording phone and is not synced to caregivers.',
  backup: 'Optional backups use your own iCloud or Google Drive account.',
  alexa: "Alexa voice requests use Amazon's Alexa systems, separately from in-app voice logging.",
};
