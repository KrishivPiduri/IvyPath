import { SignUp } from '@clerk/clerk-react';
import OnboardingProgress from '/components/OnboardingProgress';

export default function SignUpPage({ onBack, step }) {
    return (
        <div className="max-w-xl mx-auto mt-24">
            <OnboardingProgress step={step} />
            <h2 className="text-2xl font-semibold mb-6">Create your account</h2>
            <div className="bg-white rounded-lg shadow-sm">
                <SignUp 
                    path="/onboarding/signup" 
                    routing="path" 
                    signInUrl="/sign-in"
                />
            </div>
            <div className="flex justify-between mt-6">
                <button
                    onClick={onBack}
                    className="px-6 py-2 rounded border border-black text-black hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
                >
                    Back
                </button>
            </div>
        </div>
    );
}

