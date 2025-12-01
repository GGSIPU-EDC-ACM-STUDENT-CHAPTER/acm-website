export interface TeamMember {
  name: string;
  role: string;
  category: 'faculty' | 'office-bearer' | 'technical' | 'creative';
  imageUrl?: string;
  linkedin?: string;
}

export const facultyMembers: TeamMember[] = [
  { 
    name: 'Prof. Arvinder Kaur', 
    role: 'Faculty Coordinator', 
    category: 'faculty',
    imageUrl: '/ARVINDER KAUR.png',
    linkedin: 'https://linkedin.com'
  },
  { 
    name: 'Dr. Rahul Johari', 
    role: 'Faculty Sponsor', 
    category: 'faculty',
    imageUrl: '/DR RAHUL JOHARI.jpg',
    linkedin: 'https://linkedin.com'
  },
];

export const officeBearers: TeamMember[] = [
  { 
    name: 'Shivam', 
    role: 'Chair', 
    category: 'office-bearer',
    linkedin: 'https://linkedin.com'
  },
  { 
    name: 'Sheelendra', 
    role: 'Vice Chair', 
    category: 'office-bearer',
    linkedin: 'https://linkedin.com'
  },
  { 
    name: 'Arsh Ahmad', 
    role: 'Secretary', 
    category: 'office-bearer',
    linkedin: 'https://linkedin.com'
  },
  { 
    name: 'Abhijith KS', 
    role: 'Web Master', 
    category: 'office-bearer',
    linkedin: 'https://linkedin.com'
  },
  { 
    name: 'Prabhakar', 
    role: 'Treasurer', 
    category: 'office-bearer',
    linkedin: 'https://linkedin.com'
  },
  { 
    name: 'Aniket Kumar', 
    role: 'Membership Chair', 
    category: 'office-bearer',
    linkedin: 'https://linkedin.com'
  },
];

export const technicalTeam: TeamMember[] = [
  { 
    name: 'Shantanu Ojha', 
    role: 'ML Captain', 
    category: 'technical',
    linkedin: 'https://linkedin.com'
  },
  { 
    name: 'Ritwik Mittal', 
    role: 'DSA Captain', 
    category: 'technical',
    linkedin: 'https://linkedin.com'
  },
  { 
    name: 'Web Captain', 
    role: 'To Be Announced', 
    category: 'technical',
  },
  { 
    name: 'Operations Lead', 
    role: 'To Be Announced', 
    category: 'technical',
  },
];

export const creativeTeam: TeamMember[] = [
  { 
    name: 'Utkarsh Yadav', 
    role: 'Design Captain', 
    category: 'creative',
    linkedin: 'https://linkedin.com'
  },
  { 
    name: 'Shanvi Gulia', 
    role: 'Content Captain', 
    category: 'creative',
    linkedin: 'https://linkedin.com'
  },
  { 
    name: 'UI/UX Captain', 
    role: 'To Be Announced', 
    category: 'creative',
  },
  { 
    name: 'Video & Photography', 
    role: 'To Be Announced', 
    category: 'creative',
  },
  { 
    name: 'Marketing & PR', 
    role: 'To Be Announced', 
    category: 'creative',
  },
];
