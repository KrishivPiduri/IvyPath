import { useState, useEffect } from 'react';
import OnboardingProgress from '/components/OnboardingProgress';

const EC_TYPES = ["Clubs", "Internships", "Competitions", "Research", "Personal Projects"];

export default function CurrentProfile({ currentProfile, setCurrentProfileField, onNext, onBack, step }) {
    const [extracurriculars, setExtracurriculars] = useState(currentProfile?.extracurriculars || []);
    const [gpa, setGpa] = useState(currentProfile?.gpa || '');
    const [sat, setSat] = useState(currentProfile?.sat || '');

    useEffect(() => {
        setCurrentProfileField('gpa', gpa);
    }, [gpa]);
    useEffect(() => {
        setCurrentProfileField('sat', sat);
    }, [sat]);
    useEffect(() => {
        setCurrentProfileField('extracurriculars', extracurriculars);
    }, [extracurriculars]);

    const handleGpaChange = (e) => {
        const value = e.target.value;
        if (/^\d{0,1}(\.\d{0,2})?$/.test(value) && parseFloat(value) <= 4.0) {
            setGpa(value);
        }
    };

    const handleSatChange = (e) => {
        setSat(e.target.value);
    };

    const updateExtracurricular = (index, field, value) => {
        const updated = [...extracurriculars];
        updated[index][field] = value;
        setExtracurriculars(updated);
    };

    const addExtracurricular = () => {
        setExtracurriculars([
            ...extracurriculars,
            { type: '', title: '', role: '', time: '', description: '' }
        ]);
    };

    const removeExtracurricular = (index) => {
        setExtracurriculars(extracurriculars.filter((_, i) => i !== index));
    };

    return (
        <div className="max-w-xl mx-auto mt-24">
            <OnboardingProgress step={step} />
            <h2 className="text-2xl font-semibold mb-6">Where are you today?</h2>

            <div className="mb-4">
                <label className="block mb-1 font-medium">GPA (unweighted, out of 4.0)</label>
                <input
                    name="gpa"
                    value={gpa}
                    onChange={handleGpaChange}
                    className="border px-4 py-2 rounded w-full cursor-text"
                    placeholder="e.g., 3.85"
                    maxLength={4}
                />
            </div>

            <div className="mb-4">
                <label className="block mb-1 font-medium">SAT Score (optional)</label>
                <input
                    name="sat"
                    value={sat}
                    placeholder="e.g., 1500"
                    onChange={handleSatChange}
                    className="border px-4 py-2 rounded w-full cursor-text"
                />
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-3">Extracurricular Activities</h3>
            {extracurriculars.map((ec, index) => (
                <div key={index} className="border p-4 rounded mb-4 shadow-sm bg-gray-50">
                    <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold text-sm">Activity #{index + 1}</h4>
                        <button
                            onClick={() => removeExtracurricular(index)}
                            className="text-sm text-red-600 hover:underline cursor-pointer"
                        >
                            Remove
                        </button>
                    </div>
                    <div className="mb-2">
                        <label className="block text-sm font-medium mb-1">Type</label>
                        <select
                            value={ec.type}
                            onChange={(e) => updateExtracurricular(index, 'type', e.target.value)}
                            className="border px-4 py-2 rounded w-full cursor-pointer"
                        >
                            <option value="">Select type</option>
                            {EC_TYPES.map((type) => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-2">
                        <label className="block text-sm font-medium mb-1">Title</label>
                        <input
                            value={ec.title}
                            onChange={(e) => updateExtracurricular(index, 'title', e.target.value)}
                            className="border px-4 py-2 rounded w-full cursor-text"
                            placeholder="e.g., Science Club"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-sm font-medium mb-1">Role</label>
                        <input
                            value={ec.role}
                            onChange={(e) => updateExtracurricular(index, 'role', e.target.value)}
                            className="border px-4 py-2 rounded w-full cursor-text"
                            placeholder="e.g., President"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-sm font-medium mb-1">Time Commitment</label>
                        <input
                            value={ec.time}
                            onChange={(e) => updateExtracurricular(index, 'time', e.target.value)}
                            className="border px-4 py-2 rounded w-full cursor-text"
                            placeholder="e.g., 4 hrs/week"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Brief Description</label>
                        <textarea
                            value={ec.description}
                            onChange={(e) => updateExtracurricular(index, 'description', e.target.value)}
                            className="border px-4 py-2 rounded w-full cursor-text"
                            rows={2}
                            placeholder="e.g., Led weekly meetings, organized science fair"
                        />
                    </div>
                </div>
            ))}

            <button
                onClick={addExtracurricular}
                className="text-sm text-blue-600 hover:underline mt-2 cursor-pointer"
            >
                + Add another activity
            </button>

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
