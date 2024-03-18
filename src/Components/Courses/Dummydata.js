// DummyData.js
const dummyCourses = [
  {
    id: 1,
    name: "Oprah Winfrey",
    year: "USA",
    imgi: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Oprah_Winfrey_Pre_Inaugural_Reception_%2852639507800%29_%28cropped%29.jpg/330px-Oprah_Winfrey_Pre_Inaugural_Reception_%2852639507800%29_%28cropped%29.jpg",
  },
  {
    id: 2,
    name: "Michelle Obama",
    year: "USA",
    imgi: "https://hips.hearstapps.com/hmg-prod/images/michelle-obama-gettyimages-85246899.jpg?resize=1200:*", // Another placeholder image
  },
  {
    id: 3,
    name: "Serena Williams",
    year: "USA",
    imgi: "https://cdn.britannica.com/74/234474-050-A8FA4BB2/Serena-Williams-womens-single-trophy-Australian-Open-Januray-28-2017.jpg?w=400&h=300&c=crop", // Another placeholder image
  },
  {
    id: 4,
    name: "Queen Nzinga: A Legacy of Resistance and Resilience",
    year: "Angola",
    imgi: "https://ik.imagekit.io/storybird/images/be919d43-0cad-4e08-a405-3a1a26d0c1d0/0_188473747.png", // Another placeholder image
  },
  {
    id: 5,
    name: "Wangari Maathai",
    year: "Kenya",
    imgi: "https://womenscenter.unc.edu/wp-content/uploads/sites/349/2016/03/PHOTO-Wangari_Maathai-c-Patrick-Wallet-199x300.jpg", // Another placeholder image
  },
  {
    id: 6,
    name: "Ellen Johnson Sirleaf",
    year: "Liberia",
    imgi: "https://cdn.britannica.com/57/188757-050-40189A13/Ellen-Johnson-Sirleaf-2008.jpg?w=400&h=300&c=crop", // Another placeholder image
  },
  {
    id: 7,
    name: "Amina J. Mohammed",
    year: "Africa",
    imgi: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3LLegYeHySZOM6JhQ6lI7Sw0gb-ddVtyoJkXeZjPhrQ&s", // Another placeholder image
  },
  {
    id: 8,
    name: "YUHI V Musinga",
    year: "Rwanda",
    imgi: "http://t2.gstatic.com/images?q=tbn:ANd9GcQ7wzEC9Rqr2Qs42xBpwpoiAV2uF6FGS-nzCRXhXT-XIyASRlApdDYYITcIiKqpU2QXLPCR", // Another placeholder image
  },
];

const dummyModules = [
 
  {
    id: 13,
    title: " Chapter 1 :A Princess Forged in Fire",
    courseId: 4,
    description:
      "Queen Nzinga, born Anna Nzinga (Njinga) Mbande in 1583, was not your typical princess. Raised in the kingdom of Ndongo, present-day Angola, by her father, King Ngola Kilombo Kia Kasenda, Nzinga was instilled with a warrior's spirit from a young age. She excelled in hunting, combat, and diplomacy, skills that would prove crucial in the face of the looming Portuguese threat. Early in her life, Nzinga honed her political acumen as an ambassador to the Portuguese court. Fluent in Portuguese and Kikongo, she skillfully navigated the treacherous world of international relations, earning the respect of both adversaries and allies. Witnessing the Portuguese colonial ambitions firsthand, Nzinga became determined to protect her kingdom's independence.",
  },
  {
    id: 14,
    title: " Chapter 2: Queen of Ndongo Rising Against the Tide",
    courseId: 4,
    description:
      "Following the death of her brother, Nzinga ascended the throne of Ndongo in 1624. Faced with the relentless expansion of the Portuguese empire, she knew that diplomacy alone would not suffice. She embarked on a series of guerilla warfare tactics, utilizing her knowledge of the land and the element of surprise to harass and inflict significant damage on Portuguese forces. Nzinga was a master strategist, forming alliances with other African kingdoms, including the powerful Imbangala led by her husband Kasanje, to bolster her resistance. Recognizing the potential threat posed by the Dutch, she entered into a strategic alliance with them, hoping to play them against the Portuguese in a game of international chess. Despite her valiant efforts, Ndongo’s capital fell to the Portuguese in 1628. Refusing to yield, Nzinga retreated to the neighboring kingdom of Matamba, which she eventually conquered and ruled from 1631 onwards. From her new stronghold, Nzinga continued her struggle, launching successful campaigns against the Portuguese and solidifying her reputation as a fearsome warrior queen.",
  },
  {
    id: 15,
    title: " Chapter 3: A Legacy Etched in Time",
    courseId: 4,
    description:
      "Queen Nzinga's legacy extends far beyond the battlefields of Angola. Her life and struggles continue to inspire generations of Africans and people around the world who fight for freedom, justice, and equality. She stands as a testament to the power of resistance and the unwavering human spirit in the face of oppression. From her strategic brilliance on the battlefield to her shrewd diplomatic negotiations, Nzinga's leadership qualities remain unmatched. She challenged the patriarchal norms of her time, becoming a powerful symbol of female empowerment and self-determination. Beyond her political and military prowess, Nzinga's cultural impact is undeniable. She redefined the role of women in society, paving the way for future generations of female leaders. Her story continues to be celebrated through art, literature, and music, ensuring that her legacy endures for generations to come.",
  },
  {
    id: 16,
    title: "Chapter 4 : A Portrait of Courage and Conviction",
    courseId: 4,
    description:
      "Queen Nzinga's life was a tapestry woven with threads of courage, conviction, and resilience. She faced unimaginable challenges with unwavering determination, inspiring her people and allies to fight for their freedom. Her story is a testament to the human spirit's ability to overcome adversity and achieve the seemingly impossible. Through her strategic brilliance, diplomatic prowess, and sheer force of will, Nzinga carved her name into history as one of the greatest African leaders of all time.",
  },
  {
    id: 17,
    title: "Chapter 5: A Beacon of Hope for the Future",
    courseId: 4,
    description:
      "Today, Queen Nzinga remains a powerful symbol of hope and resistance for people around the world struggling against oppression and injustice. Her story offers inspiration to those who fight for their freedom and dignity, reminding us that even in the face of insurmountable odds, the human spirit can prevail. Nzinga's legacy is a call to action, urging us to stand up for what we believe in and fight for a more just and equitable world. Her bravery, intelligence, and unwavering commitment to her people continue to inspire generations to fight for a better tomorrow.",
  },
  
];

const dummyQuizData = [
  {
    courseId: 1,
    questions: [
      {
        question:
          "What event marked an important moment in the transmission of papermaking and other technologies along the trade routes in North and West Africa between the 7th and 12th centuries?",
        options: [
          "Option A: The Battle of Talas in 751",
          "Option B: The Berlin Conference in 1884-1885",
          "Option C: The establishment of the Al-Masjid al-Qiblatayn mosque",
        ],
        correctAnswer: "Option A: The Battle of Talas in 751",
      },
      {
        question:
          "Which African leader played a pivotal role in the emergence of the Mali Empire during the 11th century and contributed to its zenith during the early 14th century?",
        options: [
          "Option A: Sundiata Keita",
          "Option B: Jomo Kenyatta",
          "Option C: Nelson Mandela",
        ],
        correctAnswer: "Option A: Sundiata Keita",
      },
      {
        question:
          "What was the purpose of the Berlin Conference held in 1884-1885?",

        options: [
          "Option A: To establish the Organization of African Unity (OAU)",
          "Option B: To negotiate and formalize the rules for the division of African territories among European powers",
          "Option C: To discuss the economic progress of African nations in the 21st century",
        ],
        correctAnswer:
          "Option B: To negotiate and formalize the rules for the division of African territories among European powers",
      },
    ],
  },
  {
    courseId: 2,
    questions: [
      {
        question:
          "What was the key strategy employed by Kwame Nkrumah during the critical period of 1947 to 1957 to escalate pressure on colonial authorities and demand an end to British rule?",
        options: [
          "Option A: Positive Action Campaign",
          "Option B: Berlin Conference",
          "Option C: Gold Coast Liberation Movement",
        ],
        correctAnswer: "Option A: Positive Action Campaign",
      },

      {
        question:
          "In which year did Ghana gain independence, making it the first sub-Saharan African nation to break free from colonial chains under the leadership of Kwame Nkrumah?",
        options: ["Option A: 1948", "Option B: 1957", "Option C: 1966"],
        correctAnswer: "Option B: 1957",
      },
      {
        question:
          "What was the fate of Kwame Nkrumah in 1966, and where did he seek refuge after being overthrown?",
        options: [
          "Option A: He remained in Ghana and continued his political activities.",
          "Option B: He went into exile, first in Guinea and later in several other African and non-African countries.",
          "Option C: He retired from politics and lived a quiet life.",
        ],
        correctAnswer:
          "Option B: He went into exile, first in Guinea and later in several other African and non-African countries.",
      },
    ],
  },
  {
    courseId: 3,
    questions: [
      {
        question:
          "What was Nelson Mandela's original name before he was given the name 'Nelson'?",
        options: [
          "Option A: Rolihlahla",
          "Option B: Henry",
          "Option C: Nosekeni Fanny",
        ],
        correctAnswer: "Option A: Rolihlahla",
      },

      {
        question:
          "In which year did Nelson Mandela become South Africa's first black president?",
        options: ["Option X: 1989", "Option Y: 1990", "Option Z: 1994"],
        correctAnswer: "Option Z: 1994",
      },
      {
        question:
          "What organization did Nelson Mandela found after retiring from politics in 1999?",
        options: [
          "Option A: African National Congress (ANC)",
          "Option B: Robben Island Foundation",
          "Option C: Nelson Mandela Foundation",
        ],
        correctAnswer: "Option C: Nelson Mandela Foundation",
      },
    ],
  },
  {
    courseId: 4,
    questions: [
      {
        question:
          "In which kingdom was Queen Nzinga raised, and who was her father?",
        options: [
          "Option A: Kingdom of Matamba, Father unknown",
          "Option B: Kingdom of Ndongo, Father Ngola Kilombo Kia Kasenda",
          "Option C: Kingdom of Angola, Father Kasanje",
        ],
        correctAnswer:
          "Option B: Kingdom of Ndongo, Father Ngola Kilombo Kia Kasenda",
      },

      {
        question:
          "After the fall of Ndongo's capital to the Portuguese in 1628, where did Queen Nzinga retreat, regroup, and continue her resistance against the Portuguese?",
        options: [
          "Option A: Kingdom of Angola",
          "Option B: Kingdom of Matamba",
          "Option C: Kingdom of Kasanje",
        ],
        correctAnswer: "Option B: Kingdom of Matamba",
      },
      {
        question:
          "What aspects of Queen Nzinga's legacy continue to inspire generations, making her a symbol of hope and resistance?",
        options: [
          "Option A: Her military conquests and alliances",
          "Option B: Her strategic brilliance and diplomatic negotiations",
          "Option C: Her cultural impact, redefining the role of women in society",
        ],
        correctAnswer:
          "Option C: Her cultural impact, redefining the role of women in society",
      },
    ],
  },
  {
    courseId: 5,
    questions: [
      {
        question: "Where was Thomas Sankara born and raised?",
        options: [
          "Option A: Nigeria",
          "Option B: Burkina Faso (formerly Upper Volta)",
          "Option C: Madagascar",
        ],
        correctAnswer: "Option B: Burkina Faso (formerly Upper Volta)",
      },
      {
        question:
          "What was the nickname given to Thomas Sankara, and what did it signify?",
        options: [
          "Option A: 'The Silent Warrior,' symbolizing his reserved nature",
          "Option B: 'Africa's Che Guevara,' highlighting his revolutionary ideals",
          "Option C: 'The Diplomat,' recognizing his skills in international relations",
        ],
        correctAnswer:
          "Option B: 'Africa's Che Guevara,' highlighting his revolutionary ideals",
      },
      {
        question:
          "What was the name of the revolutionary program implemented by Thomas Sankara, and what did it aim to achieve?",
        options: [
          "Option A: 'The Elite Initiative,' focusing on the empowerment of the upper class",
          "Option B: 'Democratic and Popular Revolution,' aiming for a socially just society",
          "Option C: 'Foreign Aid Dependency,' promoting reliance on international support",
        ],
        correctAnswer:
          "Option B: 'Democratic and Popular Revolution,' aiming for a socially just society",
      },
    ],
  },
  {
    courseId: 6,
    questions: [
      {
        question: "When was Patrice Émery Lumumba born?",
        options: [
          "Option A: July 2, 1925",
          "Option B: August 5, 1930",
          "Option C: September 12, 1940",
        ],
        correctAnswer: "Option A: July 2, 1925",
      },
      {
        question:
          "What marked the beginning of Patrice Émery Lumumba's political awakening?",
        options: [
          "Option A: Witnessing the exploitation of African labourers in the workforce",
          "Option B: His experiences in the Belgian military",
          "Option C: His education in France",
        ],
        correctAnswer:
          "Option A: Witnessing the exploitation of African labourers in the workforce",
      },
      {
        question:
          "Which chapter covers Patrice Émery Lumumba's tragic downfall and assassination?",
        options: [
          "Option A: Early Life and Political Awakening",
          "Option B: Independence and Leadership",
          "Option C: Tragic Downfall and Assassination",
        ],
        correctAnswer: "Option C: Tragic Downfall and Assassination",
      },
    ],
  },
];

export { dummyCourses, dummyModules, dummyQuizData };
