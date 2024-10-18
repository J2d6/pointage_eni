export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      annee_scolaire: {
        Row: {
          annee_debut: number
          annee_fin: number
          id_annee_scolaire: number
        }
        Insert: {
          annee_debut: number
          annee_fin: number
          id_annee_scolaire?: number
        }
        Update: {
          annee_debut?: number
          annee_fin?: number
          id_annee_scolaire?: number
        }
        Relationships: []
      }
      classe: {
        Row: {
          id_annee_scolaire: number
          id_classe: number
          nom_classe: string
        }
        Insert: {
          id_annee_scolaire: number
          id_classe?: number
          nom_classe: string
        }
        Update: {
          id_annee_scolaire?: number
          id_classe?: number
          nom_classe?: string
        }
        Relationships: [
          {
            foreignKeyName: "classe_id_annee_scolaire_fkey"
            columns: ["id_annee_scolaire"]
            isOneToOne: false
            referencedRelation: "annee_scolaire"
            referencedColumns: ["id_annee_scolaire"]
          },
        ]
      }
      cours: {
        Row: {
          duree: number | null
          horaire: string
          id_annee_scolaire: number
          id_classe: number
          id_cours: number
          id_professeur: number
          nom_cours: string
          salle: string | null
        }
        Insert: {
          duree?: number | null
          horaire: string
          id_annee_scolaire: number
          id_classe: number
          id_cours?: number
          id_professeur: number
          nom_cours: string
          salle?: string | null
        }
        Update: {
          duree?: number | null
          horaire?: string
          id_annee_scolaire?: number
          id_classe?: number
          id_cours?: number
          id_professeur?: number
          nom_cours?: string
          salle?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cours_id_annee_scolaire_fkey"
            columns: ["id_annee_scolaire"]
            isOneToOne: false
            referencedRelation: "annee_scolaire"
            referencedColumns: ["id_annee_scolaire"]
          },
          {
            foreignKeyName: "cours_id_classe_fkey"
            columns: ["id_classe"]
            isOneToOne: false
            referencedRelation: "classe"
            referencedColumns: ["id_classe"]
          },
          {
            foreignKeyName: "cours_id_professeur_fkey"
            columns: ["id_professeur"]
            isOneToOne: false
            referencedRelation: "professeur"
            referencedColumns: ["id_professeur"]
          },
        ]
      }
      eleve: {
        Row: {
          id_classe: number
          id_eleve: number
          nom: string
          prenom: string
        }
        Insert: {
          id_classe: number
          id_eleve?: number
          nom: string
          prenom: string
        }
        Update: {
          id_classe?: number
          id_eleve?: number
          nom?: string
          prenom?: string
        }
        Relationships: [
          {
            foreignKeyName: "eleve_id_classe_fkey"
            columns: ["id_classe"]
            isOneToOne: false
            referencedRelation: "classe"
            referencedColumns: ["id_classe"]
          },
        ]
      }
      notification: {
        Row: {
          date: string | null
          id_eleve: number
          id_notification: number
          id_professeur: number | null
          message: string
          type_notification: string
        }
        Insert: {
          date?: string | null
          id_eleve: number
          id_notification?: number
          id_professeur?: number | null
          message: string
          type_notification: string
        }
        Update: {
          date?: string | null
          id_eleve?: number
          id_notification?: number
          id_professeur?: number | null
          message?: string
          type_notification?: string
        }
        Relationships: [
          {
            foreignKeyName: "notification_id_eleve_fkey"
            columns: ["id_eleve"]
            isOneToOne: false
            referencedRelation: "eleve"
            referencedColumns: ["id_eleve"]
          },
          {
            foreignKeyName: "notification_id_professeur_fkey"
            columns: ["id_professeur"]
            isOneToOne: false
            referencedRelation: "professeur"
            referencedColumns: ["id_professeur"]
          },
        ]
      }
      pointage: {
        Row: {
          date: string
          id_cours: number
          id_eleve: number
          retard: boolean
          statut_presence: boolean
        }
        Insert: {
          date: string
          id_cours: number
          id_eleve: number
          retard: boolean
          statut_presence: boolean
        }
        Update: {
          date?: string
          id_cours?: number
          id_eleve?: number
          retard?: boolean
          statut_presence?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "pointage_id_cours_fkey"
            columns: ["id_cours"]
            isOneToOne: false
            referencedRelation: "cours"
            referencedColumns: ["id_cours"]
          },
          {
            foreignKeyName: "pointage_id_eleve_fkey"
            columns: ["id_eleve"]
            isOneToOne: false
            referencedRelation: "eleve"
            referencedColumns: ["id_eleve"]
          },
        ]
      }
      pointage_professeur: {
        Row: {
          date: string
          id_cours: number
          id_pointage_prof: number
          id_professeur: number
          statut_presence: boolean
        }
        Insert: {
          date: string
          id_cours: number
          id_pointage_prof?: number
          id_professeur: number
          statut_presence: boolean
        }
        Update: {
          date?: string
          id_cours?: number
          id_pointage_prof?: number
          id_professeur?: number
          statut_presence?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "pointage_professeur_id_cours_fkey"
            columns: ["id_cours"]
            isOneToOne: false
            referencedRelation: "cours"
            referencedColumns: ["id_cours"]
          },
          {
            foreignKeyName: "pointage_professeur_id_professeur_fkey"
            columns: ["id_professeur"]
            isOneToOne: false
            referencedRelation: "professeur"
            referencedColumns: ["id_professeur"]
          },
        ]
      }
      professeur: {
        Row: {
          id_professeur: number
          nom: string
          prenom: string
        }
        Insert: {
          id_professeur?: number
          nom: string
          prenom: string
        }
        Update: {
          id_professeur?: number
          nom?: string
          prenom?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never


       
export type CoursWithClasse = Tables<'cours'> & {
  classe: Tables<'classe'> | null;
} ;

export type EleveWithNotification = Tables<'eleve'> & {
  notification : Tables<'notification'>[] | null
}

export type EleveWithNotificationAndClasse = Tables<'eleve'> & {
  notification : Tables<'notification'>[] | null,
  classe : Tables<'classe'> | null
} 

export type PointageWithEleveAndCoursAndNotification = TablesInsert<'pointage'> & {
  eleve : EleveWithNotification, 
  cours : CoursWithClasse
}