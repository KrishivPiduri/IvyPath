import OnboardingProgress from '/components/OnboardingProgress';

export default function Start({ onNext, step }) {
    return (
        <div className="max-w-xl mx-auto mt-24 text-center">
            <OnboardingProgress step={step} />
            <h1 className="text-3xl font-bold mb-4">Welcome to IvyPath</h1>
            <p className="text-gray-600 mb-6">We'll help you reverse-engineer your path to your dream college.</p>
            <button
                onClick={onNext}
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-700 cursor-pointer"
            >
                Let's Get Started
            </button>
        </div>
    );
}

