import OnboardingProgress from '/components/OnboardingProgress';

export default function PickSpike({ spike, setSpike, onNext, onBack, step }) {
    const options = ['STEM', 'Humanities', 'Arts', 'Leadership', 'Entrepreneurship'];

    return (
        <div className="max-w-xl mx-auto mt-24">
            <OnboardingProgress step={step} />
            <h2 className="text-2xl font-semibold mb-4">What's your spike?</h2>
            <div className="grid grid-cols-2 gap-4">
                {options.map((opt) => (
                    <button
                        key={opt}
                        className={`px-4 py-2 rounded border cursor-pointer ${spike === opt ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-50'}`}
                        onClick={() => setSpike(opt)}
                    >
                        {opt}
                    </button>
                ))}
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
                    Continue
                </button>
            </div>
        </div>
    );
}

