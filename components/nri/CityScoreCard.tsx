"use client"

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface CityScoreData {
    city: string;
    scores: { subject: string; A: number; fullMark: number }[];
    overall: number;
}

export const CityScoreCard = ({ data }: { data: CityScoreData }) => {
    return (
        <Card className="w-full max-w-lg border-none shadow-lg bg-white rounded-2xl overflow-hidden" data-testid="city-score-card">
            <CardHeader className="bg-slate-50 pb-8">
                <CardTitle className="text-2xl font-semibold text-slate-900">
                    Relocation Parity: {data.city}
                </CardTitle>
                <p className="text-sm text-slate-500">How this city matches your Seattle lifestyle.</p>
            </CardHeader>
            <CardContent className="pt-6">
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data.scores}>
                            <PolarGrid stroke="#E2E8F0" />
                            <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748B', fontSize: 12 }} />
                            <Radar
                                name="Score"
                                dataKey="A"
                                stroke="#10B981"
                                fill="#10B981"
                                fillOpacity={0.6}
                            />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>
                <div className="mt-4 flex justify-between items-center px-4 py-3 bg-emerald-50 rounded-xl">
                    <span className="text-emerald-900 font-medium">Overall Match Score</span>
                    <span className="text-2xl font-bold text-emerald-600">{data.overall}%</span>
                </div>
            </CardContent>
        </Card>
    );
};
