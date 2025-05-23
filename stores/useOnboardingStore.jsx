import { create } from 'zustand';

export const useOnboardingStore = create((set) => ({
    // User information
    grade: '',
    targetSchools: [],
    currentProfile: {
        gpa: '',
        sat: '',
        extracurriculars: []
    },
    spike: '',

    // Actions
    setField: (field, value) => set({ [field]: value }),
    reset: () => set({
        grade: '',
        targetSchools: [],
        currentProfile: {
            gpa: '',
            sat: '',
            extracurriculars: []
        },
        spike: ''
    })
}));
