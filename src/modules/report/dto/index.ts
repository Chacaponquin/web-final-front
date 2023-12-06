export interface ReportGamesByStadiumAndDateDTO {
  date: Date;
  stadiumId: number;
}

export interface ReportGamesByTeamsDTO {
  visitantId: number;
  homeId: number;
}
