import { useState } from "react";

const roles = [
    { id: 1, name: "Athlete", color: "#1A1A1A", border: "#FFBB34" },
    { id: 2, name: "Coach", color: "#FFF", border: "#212832" },
    { id: 3, name: "Analyst", color: "#FFF", border: "#FF256F" },
];

const RoleSelection = () => {
    const [selectedRole, setSelectedRole] = useState<number | null>(null);

    return (
        <div className="flex flex-col gap-4 items-center mt-10">
            {roles.map((role) => (
                <div
                    key={role.id}
                    className={`rounded-full p-1 transition-all duration-300 ${selectedRole === role.id ? "" : "border-2 border-dashed"
                        }`}
                    style={{ borderColor: role.border }}
                >
                    <div
                        onClick={() => setSelectedRole(role.id)}
                        style={{
                            backgroundColor: role.border,
                            borderColor: role.border,
                        }}
                        className={`w-[400px] py-3 text-white font-bold flex justify-center items-center gap-2 rounded-full border-2
                        relative transition-all duration-300 cursor-pointer ${selectedRole === role.id ? "scale-125 shadow-lg border-solid" : ""
                            }`}
                    >
                        <span style={{
                            color: role.color,

                        }}>
                            {role.name}
                        </span>
                        <span className="text-white">
                            <img
                                src={role.name === "Athlete" ? "/images/continue2.png" : "/images/continue.png"}
                                alt="Button Icon"
                                className="w-5 h-5"
                            />
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RoleSelection;
