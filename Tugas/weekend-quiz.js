const employeeDB = [
    {
      id: 1,
      name: "Alice Johnson",
      position: "Software Engineer",
      department: "Development",
      contactInfo: {
        email: "alice.johnson@example.com",
        phone: "123-456-7890"
      },
      skills: ["JavaScript", "React", "Node.js"]
    },
    {
      id: 2,
      name: "Bob Smith",
      position: "Marketing Manager",
      department: "Marketing",
      contactInfo: {
        email: "bob.smith@example.com",
        phone: "234-567-8901"
      },
      skills: ["SEO", "Content Marketing", "Social Media", "Email Marketing", "Google Analytics", "Brand Strategy"]
    },  
    {
      id: 3,
      name: "Carol Martinez",
      position: "Product Designer",
      department: "Design",
      contactInfo: {
        email: "carol.martinez@example.com",
        phone: "345-678-9012"
      },
      skills: ["UX Design", "Photoshop", "Illustrator"]
    },
    {
      id: 4,
      name: "David Brown",
      position: "Data Analyst",
      department: "Data Science",
      contactInfo: {
        email: "david.brown@example.com",
        phone: "456-789-0123"
      },
      skills: ["Python", "SQL", "Data Visualization"]
    },
    {
      id: 5,
      name: "Eva Green",
      position: "HR Specialist",
      department: "Human Resources",
      contactInfo: {
        email: "eva.green@example.com",
        phone: "567-890-1234"
      },
      skills: ["Recruitment", "Employee Relations", "HR Policies"]
    },
    {
      id: 6,
      name: "Frank White",
      position: "IT Support",
      department: "IT",
      contactInfo: {
        email: "frank.white@example.com",
        phone: "678-901-2345"
      },
      skills: ["Hardware Support", "Networking", "Technical Support"]
    },
    {
      id: 7,
      name: "Grace Lee",
      position: "Project Manager",
      department: "Management",
      contactInfo: {
        email: "grace.lee@example.com",
        phone: "789-012-3456"
      },
      skills: ["Project Planning", "Team Leadership", "Agile Methodologies"]
    },
    {
      id: 8,
      name: "Hannah Kim",
      position: "Quality Assurance",
      department: "Quality",
      contactInfo: {
        email: "hannah.kim@example.com",
        phone: "890-123-4567"
      },
      skills: ["Test Automation", "Manual Testing", "Bug Tracking"]
    },
    {
      id: 9,
      name: "Ian Black",
      position: "Financial Analyst",
      department: "Finance",
      contactInfo: {
        email: "ian.black@example.com",
        phone: "901-234-5678"
      },
      skills: ["Financial Analysis", "Excel", "Budgeting"]
    },
    {
      id: 10,
      name: "Jasmine Patel",
      position: "Content Writer",
      department: "Marketing",
      contactInfo: {
        email: "jasmine.patel@example.com",
        phone: "012-345-6789"
      },
      skills: ["Copywriting", "Creative Writing", "Editing", "Content Marketing"]
    }
  ];
  
  /*
    Quiz 1: Extract the email addresses of all employees.
  
    Expected Output:
    [
      "alice.johnson@example.com",
      "bob.smith@example.com",
      "carol.martinez@example.com",
      "david.brown@example.com",
      "eva.green@example.com",
      "frank.white@example.com",
      "grace.lee@example.com",
      "hannah.kim@example.com",
      "ian.black@example.com",
      "jasmine.patel@example.com"
    ]
  */
  
  console.log("Quiz no. 1");
  
  
  const employeeEmail = employeeDB.map((employee) => {
    return employee.contactInfo.email
  })
  console.log(employeeEmail);
  

  
  /*
    Quiz 2: List the names of all employees who have the skill "JavaScript".
  
    Expected Output:
    ["Alice Johnson"]
  */
  
  console.log("Quiz no. 2");
  
  
  javascriptEmployee = [];
  
  const targetSkill = 'JavaScript';

  let skillFound;

  for (const employee of employeeDB) {
    if (employee.skills.includes(targetSkill)) {
      javascriptEmployee.push(employee.name)
      skillFound = true;
    }
  }

  console.log(javascriptEmployee);
  

  /*
    Quiz 3: How many unique skills are present in the "Marketing" department?
  
    Expected Output:
    8 // ("SEO", "Content Marketing", "Social Media", "Email Marketing", "Google Analytics", "Brand Strategy", "Copywriting", "Creative Writing", "Editing")
  */
  
  console.log("Quiz no. 3");

  const uniqueSkills = [];

for (const user of employeeDB) {
    if (user.department === "Marketing") {
        uniqueSkills.push(user.skills)
    }
}

console.log(uniqueSkills.join());
  
  
  /*
    Quiz 4: For each employee, combine their name and contactInfo into a new object with properties name and contact. The contact property should include both email and phone.
  
    Expected Output:
    [
      {
        name: "Alice Johnson",
        contact: {
          email: "alice.johnson@example.com",
          phone: "123-456-7890"
        }
      },
      {
        name: "Bob Smith",
        contact: {
          email: "bob.smith@example.com",
          phone: "234-567-8901"
        }
      },
      {
        name: "Carol Martinez",
        contact: {
          email: "carol.martinez@example.com",
          phone: "345-678-9012"
        }
      },
      {
        name: "David Brown",
        contact: {
          email: "david.brown@example.com",
          phone: "456-789-0123"
        }
      },
      {
        name: "Eva Green",
        contact: {
          email: "eva.green@example.com",
          phone: "567-890-1234"
        }
      },
      {
        name: "Frank White",
        contact: {
          email: "frank.white@example.com",
          phone: "678-901-2345"
        }
      },
      {
        name: "Grace Lee",
        contact: {
          email: "grace.lee@example.com",
          phone: "789-012-3456"
        }
      },
      {
        name: "Hannah Kim",
        contact: {
          email: "hannah.kim@example.com",
          phone: "890-123-4567"
        }
      },
      {
        name: "Ian Black",
        contact: {
          email: "ian.black@example.com",
          phone: "901-234-5678"
        }
      },
      {
        name: "Jasmine Patel",
        contact: {
          email: "jasmine.patel@example.com",
          phone: "012-345-6789"
        }
      }
    ]
  */
  
  console.log("Quiz no. 4");
  
  const employeeContacts = employeeDB.map(employee => ({
    name: employee.name,
    contact: {
      email: employee.contactInfo.email,  
      phone: employee.contactInfo.phone,
    },
  }));
  console.log(employeeContacts);
  
  /*
    Quiz 5: Identify the employee with the most skills and provide their name and the number of skills they have.
  
    Expected Output:
    {
      name: "Bob Smith",
      skillsCount: 6
    }
  */
  
  let employeeSkill;
  let skillsCount;

  for (const employee of employeeDB) {
    if (employee.skills.length > skillsCount) {
      skillsCount = employee.skills.length;
      employeeSkill = true;
    }
  }
  console.log(employeeSkill);
  
  
  /*
    Quiz 6 (Bonus): Write a function called "findEmployeeById" that takes an "id" as a parameter and returns the employee object with that ID from the "employeeDB" array. 
  
    Expected Output:
    {
      id: 4,
      name: "David Brown",
      position: "Data Analyst",
      department: "Data Science",
      contactInfo: {
        email: "david.brown@example.com",
        phone: "456-789-0123"
      },
      skills: ["Python", "SQL", "Data Visualization"]
    }
  */
  
  
  
  /*
    Quiz 7 (Bonus): Write a function called "getEmployeesWithSkill" that takes a skill as a parameter and returns an array of employee names who possess that skill. Additionally, write another function called "getEmployeeContactsWithSkill" that takes a skill as a parameter and uses "getEmployeesWithSkill" to find employees with that skill. The "getEmployeeContactsWithSkill" function should return an array of objects containing the "name" and "contactInfo" (with "email" and "phone") of these employees.
  
    Expected Output:
    1. If the skill parameter is "Python", the output should be:
    [
      {
        name: "David Brown",
        contactInfo: {
          email: "david.brown@example.com",
          phone: "456-789-0123"
        }
      }
    ]
  
    2. If the skill parameter is "Content Marketing", the output should be:
    [
      {
        name: "Bob Smith",
        contactInfo: {
          email: "bob.smith@example.com",
          phone: "234-567-8901"
        }
      },
      {
        name: "Jasmine Patel",
        contactInfo: {
          email: "jasmine.patel@example.com",
          phone: "012-345-6789"
        }
      }
    ]
  */
  