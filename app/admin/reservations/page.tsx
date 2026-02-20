"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { ReservationStatusBadge } from "@/components/admin/ReservationStatusBadge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Lock, RefreshCw, Trash2 } from "lucide-react"

type Reservation = {
  id: string
  customerName: string
  customerEmail: string
  customerPhone: string
  date: string
  timeSlot: string
  guestCount: number
  specialRequests?: string
  status: string
  createdAt: string
}

export default function AdminReservationsPage() {
  const [password, setPassword] = useState("")
  const [authenticated, setAuthenticated] = useState(false)
  const [reservations, setReservations] = useState<Reservation[]>([])
  const [loading, setLoading] = useState(false)
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [filterDate, setFilterDate] = useState("")

  const fetchReservations = useCallback(async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      if (filterStatus !== "all") params.set("status", filterStatus)
      if (filterDate) params.set("date", filterDate)

      const res = await fetch(`/api/reservations?${params}`, {
        headers: { "x-admin-password": password },
      })

      if (res.status === 401) {
        setAuthenticated(false)
        return
      }

      const data = await res.json()
      setReservations(data)
    } catch {
      console.error("Failed to fetch reservations")
    } finally {
      setLoading(false)
    }
  }, [password, filterStatus, filterDate])

  useEffect(() => {
    if (authenticated) fetchReservations()
  }, [authenticated, fetchReservations])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setAuthenticated(true)
  }

  const updateStatus = async (id: string, status: string) => {
    await fetch(`/api/reservations/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "x-admin-password": password,
      },
      body: JSON.stringify({ status }),
    })
    fetchReservations()
  }

  const deleteReservation = async (id: string) => {
    if (!confirm("Supprimer cette réservation ?")) return
    await fetch(`/api/reservations/${id}`, {
      method: "DELETE",
      headers: { "x-admin-password": password },
    })
    fetchReservations()
  }

  if (!authenticated) {
    return (
      <div className="container py-16">
        <div className="max-w-sm mx-auto">
          <Card className="border-border/30">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h1 className="font-playfair text-2xl font-bold text-primary">
                  Administration
                </h1>
              </div>
              <form onSubmit={handleLogin} className="space-y-4">
                <Input
                  type="password"
                  placeholder="Mot de passe admin"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Connexion
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-playfair text-3xl font-bold text-primary">
          Réservations
        </h1>
        <Button
          variant="outline"
          size="sm"
          onClick={fetchReservations}
          disabled={loading}
        >
          <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
          Actualiser
        </Button>
      </div>

      <div className="flex gap-4 mb-6 flex-wrap">
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Statut" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les statuts</SelectItem>
            <SelectItem value="PENDING">En attente</SelectItem>
            <SelectItem value="CONFIRMED">Confirmée</SelectItem>
            <SelectItem value="CANCELLED">Annulée</SelectItem>
          </SelectContent>
        </Select>
        <Input
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          className="w-[180px]"
        />
        {filterDate && (
          <Button variant="ghost" size="sm" onClick={() => setFilterDate("")}>
            Effacer date
          </Button>
        )}
      </div>

      <Card className="border-border/30">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Heure</TableHead>
                <TableHead>Nom</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Pers.</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reservations.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center text-muted-foreground py-8">
                    Aucune réservation trouvée
                  </TableCell>
                </TableRow>
              ) : (
                reservations.map((r) => (
                  <TableRow key={r.id}>
                    <TableCell>
                      {new Date(r.date).toLocaleDateString("fr-FR")}
                    </TableCell>
                    <TableCell>{r.timeSlot}</TableCell>
                    <TableCell>
                      <div className="font-medium">{r.customerName}</div>
                      {r.specialRequests && (
                        <div className="text-xs text-muted-foreground">{r.specialRequests}</div>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">{r.customerPhone}</div>
                      <div className="text-xs text-muted-foreground">{r.customerEmail}</div>
                    </TableCell>
                    <TableCell>{r.guestCount}</TableCell>
                    <TableCell>
                      <ReservationStatusBadge status={r.status} />
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        {r.status === "PENDING" && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-green-600 border-green-300 hover:bg-green-50"
                            onClick={() => updateStatus(r.id, "CONFIRMED")}
                          >
                            Confirmer
                          </Button>
                        )}
                        {r.status !== "CANCELLED" && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-yellow-600 border-yellow-300 hover:bg-yellow-50"
                            onClick={() => updateStatus(r.id, "CANCELLED")}
                          >
                            Annuler
                          </Button>
                        )}
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-destructive"
                          onClick={() => deleteReservation(r.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
