import { cn } from "@/lib/utils"

const statusConfig = {
  PENDING: { label: "En attente", className: "bg-yellow-100 text-yellow-800" },
  CONFIRMED: { label: "Confirmée", className: "bg-green-100 text-green-800" },
  CANCELLED: { label: "Annulée", className: "bg-red-100 text-red-800" },
}

export function ReservationStatusBadge({ status }: { status: string }) {
  const config = statusConfig[status as keyof typeof statusConfig] ?? {
    label: status,
    className: "bg-gray-100 text-gray-800",
  }

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        config.className
      )}
    >
      {config.label}
    </span>
  )
}
