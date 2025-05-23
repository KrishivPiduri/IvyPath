export default function OnboardingProgress({ step }) {
    const percent = (step / 7) * 100;
    return (
        <div className="w-full h-2 bg-gray-200 rounded mb-6">
            <div className="h-full bg-black rounded" style={{ width: `${percent}%` }} />
        </div>
    );
}