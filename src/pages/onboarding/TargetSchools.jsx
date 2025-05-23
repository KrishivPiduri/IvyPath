import { useState } from 'react';
import OnboardingProgress from '/components/OnboardingProgress';

const COLLEGE_LIST = [
    "Harvard University", "Stanford University", "Yale University",
    "Princeton University", "MIT", "Columbia University",
    "University of Chicago", "University of Pennsylvania", "Caltech",
    "Duke University", "Northwestern University", "Brown University",
    "Dartmouth College", "Cornell University", "Johns Hopkins University"
];

export default function TargetSchools({ targetSchools, setTargetSchools, onNext, onBack, step }) {
    const [query, setQuery] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [error, setError] = useState(false);

    const filteredColleges = COLLEGE_LIST.filter(
        (school) =>
            school.toLowerCase().includes(query.toLowerCase()) &&
            !targetSchools.includes(school)
    );

    const selectSchool = (school) => {
        setTargetSchools([...targetSchools, school]);
        setQuery('');
        setShowDropdown(false);
        setError(false);
    };

    const removeSchool = (schoolToRemove) => {
        setTargetSchools(targetSchools.filter((s) => s !== schoolToRemove));
    };

    const handleContinue = () => {
        if (targetSchools.length === 0) {
            setError(true);
        } else {
            onNext();
        }
    };

    return (
        <div className="max-w-xl mx-auto mt-24">
            <OnboardingProgress step={step} />
            <h2 className="text-2xl font-semibold mb-4">What schools are you aiming for?</h2>

            <div className="relative">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setShowDropdown(true);
                    }}
                    onFocus={() => setShowDropdown(true)}
                    onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                    className="border px-4 py-2 rounded w-full cursor-text"
                    placeholder="Start typing a college name..."
                />
                {showDropdown && filteredColleges.length > 0 && (
                    <ul className="absolute z-10 w-full bg-white border mt-1 rounded shadow max-h-60 overflow-y-auto">
                        {filteredColleges.map((school) => (
                            <li
                                key={school}
                                onClick={() => selectSchool(school)}
                                className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
                            >
                                {school}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {targetSchools.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                    {targetSchools.map((school) => (
                        <span
                            key={school}
                            className="bg-gray-100 text-sm px-3 py-1 rounded-full flex items-center gap-2"
                        >
                            {school}
                            <button
                                onClick={() => removeSchool(school)}
                                className="ml-2 w-5 h-5 flex items-center justify-center rounded-full hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
                            >
                                ×
                            </button>
                        </span>
                    ))}
                </div>
            )}

            {error && (
                <div className="text-red-600 mt-4 text-sm font-medium">
                    Please select at least one target school to continue.
                </div>
            )}

            <div className="flex justify-between mt-6">
                <button
                    onClick={onBack}
                    className="px-6 py-2 rounded border border-black text-black hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
                >
                    Back
                </button>
                <button
                    onClick={handleContinue}
                    className="px-6 py-2 rounded bg-black text-white hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
                >
                    Continue
                </button>
            </div>
        </div>
    );
}
