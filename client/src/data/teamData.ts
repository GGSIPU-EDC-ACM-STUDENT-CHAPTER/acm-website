export interface TeamMember {
  name: string;
  role: string;
  category: 'faculty' | 'office-bearer' | 'technical' | 'creative';
  imageUrl?: string;
  linkedin?: string;
}

// ==========================================
// 2025-26 TEAM (Current)
// ==========================================

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
  { 
    name: 'Abhijith KS', 
    role: 'Web Master', 
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
    name: 'To Be Announced', 
    role: 'Web Captain', 
    category: 'technical',
  },
  { 
    name: 'To Be Announced', 
    role: 'Operations Lead', 
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
    name: 'To Be Announced', 
    role: 'UI/UX Captain', 
    category: 'creative',
  },
  { 
    name: 'To Be Announced', 
    role: 'Video & Photography', 
    category: 'creative',
  },
  { 
    name: 'To Be Announced', 
    role: 'Marketing & PR', 
    category: 'creative',
  },
];

// ==========================================
// 2024-25 TEAM (Past/Founding Team)
// ==========================================

export const facultyMembers2024: TeamMember[] = [
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

export const officeBearers2024: TeamMember[] = [
  { 
    name: 'Aditya Kumar', 
    role: 'Chair', 
    category: 'office-bearer',
    linkedin: 'https://linkedin.com'
  },
  { 
    name: 'Durga Sharma', 
    role: 'Vice Chair', 
    category: 'office-bearer',
    linkedin: 'https://linkedin.com'
  },
  { 
    name: 'Chirag Khanna', 
    role: 'Secretary', 
    category: 'office-bearer',
    linkedin: 'https://linkedin.com'
  },
  { 
    name: 'Ushnik Nath', 
    role: 'Treasurer', 
    category: 'office-bearer',
    linkedin: 'https://linkedin.com'
  },
  { 
    name: 'Sheelendra', 
    role: 'Membership Chair', 
    category: 'office-bearer',
    linkedin: 'https://linkedin.com'
  },
  { 
    name: 'Shivam', 
    role: 'Web Master', 
    category: 'office-bearer',
    linkedin: 'https://linkedin.com'
  },
];

export const technicalTeam2024: TeamMember[] = [];

export const creativeTeam2024: TeamMember[] = [];

// ==========================================
// TEAM DATA BY YEAR
// ==========================================

export type TeamYear = '2024-25' | '2025-26';

export const teamDataByYear = {
  '2024-25': {
    faculty: facultyMembers2024,
    officeBearers: officeBearers2024,
    technical: technicalTeam2024,
    creative: creativeTeam2024,
  },
  '2025-26': {
    faculty: facultyMembers,
    officeBearers: officeBearers,
    technical: technicalTeam,
    creative: creativeTeam,
  },
};
