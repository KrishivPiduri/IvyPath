import OnboardingProgress from '/components/OnboardingProgress';

export default function ProfilePreview({ onboardingData, onNext, onBack, step }) {
    const { spike, grade, targetSchools } = onboardingData;

    return (
        <div className="max-w-xl mx-auto mt-24">
            <OnboardingProgress step={step} />
            <h2 className="text-2xl font-semibold mb-4">Here's your dream profile</h2>
            <p className="mb-6 text-gray-600">We've analyzed your goals and created a personalized roadmap to help you get into {targetSchools[0] || 'your dream schools'}.</p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold mb-3">Your Path to Success</h3>
                <ul className="space-y-2">
                    <li className="flex items-center">
                        <span className="w-32 text-gray-600">Grade Level:</span>
                        <span className="font-medium">{grade}</span>
                    </li>
                    <li className="flex items-center">
                        <span className="w-32 text-gray-600">Focus Area:</span>
                        <span className="font-medium">{spike || 'Not selected'}</span>
                    </li>
                    <li className="flex items-center">
                        <span className="w-32 text-gray-600">Target GPA:</span>
                        <span className="font-medium">3.9+</span>
                    </li>
                    <li className="flex items-center">
                        <span className="w-32 text-gray-600">Target SAT:</span>
                        <span className="font-medium">1550+</span>
                    </li>
                </ul>
            </div>

            <div className="flex justify-between mt-6">
                <button
                    onClick={onBack}
                    className="px-6 py-2 rounded border border-black text-black hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
                >
                    Back
                </button>
                <button
                    onClick={onNext}
                    className="px-6 py-2 rounded bg-black text-white hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
                >
                    Create Account
                </button>
            </div>
        </div>
    );
}

