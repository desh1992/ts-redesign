import { SparklesPreview, SparklesPreviewDark, SparklesPreviewColorful } from "@/components/sparkles-demo";

export default function SparklesTestPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8 space-y-8">
        <h1 className="text-4xl font-bold text-center mb-8">SparklesCore Component Demo</h1>
        
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Basic Sparkles Preview</h2>
            <SparklesPreview />
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Dark Theme Sparkles</h2>
            <SparklesPreviewDark />
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Colorful Sparkles</h2>
            <SparklesPreviewColorful />
          </div>
        </div>
      </div>
    </div>
  );
}
