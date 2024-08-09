import * as Yup from "yup";

export type userProfileProp = {
    FirstName: string;
    LastName: string;
    Email: string;
    // User_ZipCode: string;
    // User_City: string;
    // User_State: string;
    // login: string;
    // User_Role?: string;
    // User_County?: string;
    // User_Country?: string;
    // mobilePhone?: string;
    // secondEmail?: string;
}

export const initialUserProfile: userProfileProp = {
    FirstName: "",
    LastName: "",
    // User_ZipCode: "",
    // User_City: "",
    // User_State: "",
    Email: "",
    // login: "",
    // User_Role: "",
    // User_County: "",
    // User_Country: "",
    // mobilePhone: "",
    // secondEmail: "",
}

export const profileValidation = Yup.object({
    FirstName: Yup.string()
        .min(3, "First name must be at least 3 characters")
        .max(20, "First name must be less than 20 characters")
        .required("First name is required"),
    LastName: Yup.string()
        .min(3, "Last name must be at least 3 characters")
        .max(20, "Last name must be less than 20 characters")
        .required("Last name is required"),
    Email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
});

export type TabsProp = {
    label: string,
    value: string,
}

export const profileTabs: TabsProp[] = [{
    label: "My Profile",
    value: "myProfile"
}, {
    label: "Class Information",
    value: "classInformation"
}]

export const heading = ["Subjects taught", "Which role best describes you?", "What is your school or learning setting type?", "Subjects taught"]


export const grade = {
    heading: heading[0],
    items: [
        {
            label: "k-2",
            value: 'k-2',
        },
        {
            label: "3-5",
            value: '3-5',
        }, {
            label: "9-12",
            value: '9-12',
        }, {
            label: "Higher Education",
            value: 'Higher Education',
        }, {
            label: "Adult Learner",
            value: "Adult Learner",
        }
    ],
    selectedItems: [
        {
            label: "6-8",
            value: '6-8',
        }
    ],

}

export const subjectTaught = {
    heading: heading[3],
    items: [
        {
            label: "Math",
            value: 'Math',
        },
        {
            label: "English",
            value: 'English',
        },
        {
            label: "Finance",
            value: 'Finance',
        },
        {
            label: "STEM",
            value: 'STEM',
        },
        {
            label: "Social Study/History",
            value: 'Social Study/History',
        },
        {
            label: "Health Science",
            value: 'Health Science',
        },
        {
            label: "Human Service",
            value: 'Human Service',
        },
        {
            label: "Business and Entrepreneurship",
            value: 'Business and Entrepreneurship',
        }
    ],
    selectedItems: [
        {
            label: "Zoology",
            value: 'Zoology',
        },
        {
            label: "Science",
            value: 'Science',
        },
    ]
}

export const schoolSettings = {
    heading: heading[2],
    items: [
        {
            label: "Private School",
            value: 'Private School',
        },
        {
            label: "Faith Based School",
            value: 'Faith Based School',
        },
        {
            label: "Home School",
            value: 'Home School',
        },
        {
            label: "Charter School",
            value: 'Charter School',
        },
        {
            label: "Virtual/Online School",
            value: 'Virtual/Online School',
        },
        {
            label: "Micro School",
            value: 'Micro School',
        },
        {
            label: "Other",
            value: 'Other',
        },
    ],
    selectedItems: [
        {
            label: "After School Program",
            value: 'After School Program',
        },
        {
            label: "Public School",
            value: 'Public School',
        },
    ]
}

export const roles = {
    heading: heading[1],
    items: [
        {
            label: "Administrator/Director",
            value: 'Administrator/Director',
        },
        {
            label: "Community",
            value: 'Community',
        },
        {
            label: "Student",
            value: 'Student',
        },
    ],
    selectedItems: [
        {
            label: "Educator",
            value: 'Educator',
        },
    ]
}
