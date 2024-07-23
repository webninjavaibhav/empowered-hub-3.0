import Images from "../../../../assets";

export type StepperProp = {
    title: string,
    description: string,
}


export const questions: any[] = [
    {
        id: 0,
        question: "Which role best describes you?",
        description: "You can only choose one role",
        options: [
            {
                description: "Administrator/Director",
                subDescription: "Primarily works with educators, not students.",
                icon: Images.administration,
                type: "radio",
            },
            {
                description: "Educator",
                subDescription: "Works most directly with students",
                icon: Images.educator,
                type: "radio",
            },
            {
                description: "Community",
                subDescription: "A supporter of education initiatives",
                icon: Images.community,
                type: "radio",
            },
            {
                description: "Student",
                subDescription:
                    "A student in a formal or informal learning environment",
                icon: Images.student,
                type: "radio",
            },
        ],
    },
    {
        id: 1,
        question: "What is your school or learning setting type?",
        description: "You can only choose multiple option.",
        options: [
            {
                description: "Public School ",
                type: "checkbox",
            },
            {
                description: "Private School",
                type: "checkbox",
            },
            {
                description: "Faith Based School ",
                type: "checkbox",
            },
            {
                description: "Home School ",
                type: "checkbox",
            },
            {
                description: "Charter School ",
                type: "checkbox",
            },
            {
                description: "Virtual/Online School ",
                type: "checkbox",
            },
            {
                description: "Micro School ",
                type: "checkbox",
            },
            {
                description: "After School Program",
                type: "checkbox",
            },
            {
                description: "Other ",
                type: "checkbox",
            },
        ],
    },
    {
        id: 2,
        question: "What grade levels do you work with?",
        description: "You can only choose one option.",
        options: [
            {
                description: "K-2",
                type: "checkbox",
            },
            {
                description: "3-5",
                type: "checkbox",
            },
            {
                description: "6-8",
                type: "checkbox",
            },
            {
                description: "9-12",
                type: "checkbox",
            },
            {
                description: "Higher Education",
                type: "checkbox",
            },
            {
                description: "Adult Learners",
                type: "checkbox",
            },
        ],
    },
    {
        id: 3,
        question: "What grade levels do you work with?",
        description: "You can only choose one option.",
        options: [
            {
                description: "Math",
                type: "checkbox",
            },
            {
                description: "English",
                type: "checkbox",
            },
            {
                description: "Science",
                type: "checkbox",
            },
            {
                description: "Social Studies/History",
                type: "checkbox",
            },
            {
                description: "STEM",
                type: "checkbox",
            },
            {
                description: "Business and Entrepreneurship",
                type: "checkbox",
            },
            {
                description: "Human Service",
                type: "checkbox",
            },
            {
                description: "Finance",
                type: "checkbox",
            },
        ],
    },
];

export const steps: StepperProp[] = [
    {
        title: "Describe Role",
        description: "Choose one role",
    },
    {
        title: "Choose School",
        description: "Choose multiple option",
    },
    {
        title: "Grade Lavel",
        description: "Choose one option",
    },
    {
        title: "Subject",
        description: "Choose multiple option",
    },
];
