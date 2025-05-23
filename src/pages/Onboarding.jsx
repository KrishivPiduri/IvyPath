import { useState } from 'react';
import Start from './onboarding/Start';
import Grade from './onboarding/Grade';
import PickSpike from './onboarding/PickSpike';
import TargetSchools from './onboarding/TargetSchools';
import CurrentProfile from './onboarding/CurrentProfile';
import ProfilePreview from './onboarding/ProfilePreview';
import SignUpPage from './onboarding/SignUpPage';

const steps = [
    'start',
    'grade',
    'spike',
    'schools',
    'profile',
    'preview',
    'signup'
];

export default function Onboarding() {
    const [step, setStep] = useState(0);
    const [grade, setGrade] = useState('');
    const [spike, setSpike] = useState('');
    const [targetSchools, setTargetSchools] = useState([]);
    const [currentProfile, setCurrentProfile] = useState({
        gpa: '',
        sat: '',
        extracurriculars: []
    });

    const setCurrentProfileField = (field, value) => {
        setCurrentProfile((prev) => ({
            ...prev,
            [field]: value
        }));
    };

    const onboardingData = {
        grade,
        spike,
        targetSchools,
        currentProfile
    };

    const goNext = () => setStep((s) => Math.min(s + 1, steps.length - 1));
    const goBack = () => setStep((s) => Math.max(s - 1, 0));

    switch (steps[step]) {
        case 'start':
            return <Start onNext={goNext} step={step} />;
        case 'grade':
            return (
                <Grade
                    grade={grade}
                    setGrade={setGrade}
                    onNext={goNext}
                    onBack={goBack}
                    step={step}
                />
            );
        case 'spike':
            return (
                <PickSpike
                    spike={spike}
                    setSpike={setSpike}
                    onNext={goNext}
                    onBack={goBack}
                    step={step}
                />
            );
        case 'schools':
            return (
                <TargetSchools
                    targetSchools={targetSchools}
                    setTargetSchools={setTargetSchools}
                    onNext={goNext}
                    onBack={goBack}
                    step={step}
                />
            );
        case 'profile':
            return (
                <CurrentProfile
                    currentProfile={currentProfile}
                    setCurrentProfileField={setCurrentProfileField}
                    onNext={goNext}
                    onBack={goBack}
                    step={step}
                />
            );
        case 'preview':
            return (
                <ProfilePreview
                    onboardingData={onboardingData}
                    onNext={goNext}
                    onBack={goBack}
                    step={step}
                />
            );
        case 'signup':
            return (
                <SignUpPage
                    onBack={goBack}
                    step={step}
                />
            );
        default:
            return null;
    }
}