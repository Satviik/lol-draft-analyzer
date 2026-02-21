import React from "react";
import RoleSlot from "./RoleSlot";

const ROLES = [
  { role: "Top", label: "Top" },
  { role: "Jungle", label: "Jungle" },
  { role: "Mid", label: "Mid" },
  { role: "ADC", label: "ADC" },
  { role: "Support", label: "Support" },
];

export default function TeamCard({
  side = "blue",
  assignedSlots = {},
  lockedRole = null,
  onLockRole,
  onClearSlot,
}) {

  const isBlue = side === "blue";

  const accentColor = isBlue
    ? "bg-blue-team"
    : "bg-red-team";

  const titleColor = isBlue
    ? "text-blue-team"
    : "text-red-team";

  const title = isBlue
    ? "Blue Side"
    : "Red Side";


  return (

    <div
      className="
        flex flex-col gap-4
        p-4
        w-full max-w-[389px]
        lg:w-[389px]
        rounded-card
        border border-border
        bg-bg-medium
      "
    >

      {/* HEADER */}

      <header
  className="
    flex justify-center items-center
    pb-2
    border-b border-border
  "
>

  <h2
    className={`
      font-semibold
      text-lg
      tracking-wide
      font-inter
      text-center

      ${isBlue
        ? "text-blue-team"
        : "text-red-team"
      }
    `}
  >
    {title}
  </h2>

</header>


      {/* ROLE SLOTS */}

      <div className="flex flex-col gap-4">

        {ROLES.map(({ role, label }) => {

          const slotKey =
            `${side}-${role.toLowerCase()}`;

          const assignedChampion =
            assignedSlots[slotKey];

          const isLockedSlot =
            lockedRole?.team === side &&
            lockedRole?.role === role;

          return (

            <RoleSlot
              key={role}
              role={role}
              label={label}
              team={side}
              slotId={slotKey}
              selectedChampion={assignedChampion}
              isTarget={isLockedSlot}
              lockedRole={lockedRole}
              onClearSlot={onClearSlot}
              onClick={onLockRole}
              onLockRole={onLockRole}
            />

          );

        })}

      </div>

    </div>

  );

}