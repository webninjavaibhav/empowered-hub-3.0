import Images from "../../../../assets";

export type StepperProp = {
    title: string,
    description: string,
}


export const selectRole = {
    question: "Which role best describes you?",
    description: "You can only choose one role",
    field: "role",
    inputType: "radio",
    multiselect: false,
    options: [
        {
            value: "administrator",
            label: "Administrator/Director",
            subLabel: "Primarily works with educators, not students.",
            icon: Images.administration,
        },
        {
            value: "educator",
            label: "Educator",
            subLabel: "Works most directly with students",
            icon: Images.educator,
        },
        {
            value: "community",
            label: "Community",
            subLabel: "A supporter of education initiatives",
            icon: Images.community,
        },
        {
            value: "student",
            label: "Student",
            subLabel:
                "A student in a formal or informal learning environment",
            icon: Images.student,
        },
    ],
}


export const questions: any[] = [
    {
        question: "What is your school or learning setting type?",
        description: "You can only choose multiple option.",
        field: "settingType",
        inputType: "checkbox",
        multiselect: true,
        options: [
            {
                value: "publicSchool",
                label: "Public School"
            },
            {
                value: "privateSchool",
                label: "Private School"
            },
            {
                value: "faithBasedSchool",
                label: "Faith Based School"
            },
            {
                value: "homeSchool",
                label: "Home School"
            },
            {
                value: "charterSchool",
                label: "Charter School"
            },
            {
                value: "virtualSchool",
                label: "Virtual/Online School"
            },
            {
                value: "microSchool",
                label: "Micro School"
            },
            {
                value: "afterSchoolProgram",
                label: "After School Program"
            },
            {
                value: "other",
                label: "Other"
            },
        ],
    },
    {
        question: "What grade levels do you work with?",
        description: "You can only choose one option.",
        field: "grade",
        inputType: "checkbox",
        multiselect: false,
        options: [
            {
                value: "k2",
                label: "K-2"
            },
            {
                value: "3_5",
                label: "3-5"
            },
            {
                value: "6_8",
                label: "6-8"
            },
            {
                value: "9_12",
                label: "9-12"
            },
            {
                value: "higherEducation",
                label: "Higher Education"
            },
            {
                value: "adultLearners",
                label: "Adult Learners"
            },
        ],
    },
    {
        question: "Subject taught",
        description: "You can only choose one option.",
        field: "subjectTaught",
        type: "checkbox",
        multiselect: true,
        options: [
            {
                value: "math",
                label: "Math"
            },
            {
                value: "english",
                label: "English"
            },
            {
                value: "science",
                label: "Science"
            },
            {
                value: "socialStudy",
                label: "Social Studies/History"
            },
            {
                value: "stem",
                label: "STEM"
            },
            {
                value: "businessAnEnterpreneurship",
                label: "Business and Entrepreneurship"
            },
            {
                value: "humanService",
                label: "Human Service"
            },
            {
                value: "finance",
                label: "Finance"
            },
        ],
    },
];

export const steps: StepperProp[] = [
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
