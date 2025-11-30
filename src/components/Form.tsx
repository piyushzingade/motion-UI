import { User, Mail, Lock } from "lucide-react";

export function Form() {
    return (
        <div className="min-h-screen w-full mx-auto flex items-center justify-center 
            bg-gradient-to-br from-green-700/40 via-green-800/40 to-green-900">

            <div className="relative max-w-sm w-full px-8 py-10 
                bg-white/10 backdrop-blur-xl rounded-2xl
                shadow-2xl border border-white/20 flex flex-col gap-6 items-center">

                {/* Top Icon */}
                <div className="absolute -top-14 w-24 h-24 
                    bg-green-700 rounded-full border-4 border-white 
                    flex items-center justify-center shadow-lg">
                    <User className="w-12 h-12 text-white" />
                </div>

                {/* Input: Email */}
                <div className="w-full flex items-center gap-3 bg-white/20 px-4 py-3 
                    rounded-lg border border-white/30">
                    <Mail className="text-gray-100 w-5" />
                    <input
                        type="text"
                        placeholder="Email ID"
                        className="bg-transparent w-full outline-none text-white placeholder-gray-200"
                    />
                </div>

                {/* Input: Password */}
                <div className="w-full flex items-center gap-3 bg-white/20 px-4 py-3 
                    rounded-lg border border-white/30">
                    <Lock className="text-gray-100 w-5" />
                    <input
                        type="password"
                        placeholder="Password"
                        className="bg-transparent w-full outline-none text-white placeholder-gray-200"
                    />
                </div>

                <div className="flex justify-between w-full text-white/80 text-sm">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="accent-green-600" />
                        Remember me
                    </label>

                    <span className="cursor-pointer hover:underline">Forgot Password?</span>
                </div>

                <button className="w-full py-3 bg-green-900 text-white rounded-lg tracking-wide">
                    LOGIN
                </button>
            </div>
        </div>
    );
}
