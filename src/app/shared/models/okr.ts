export interface Parent extends OKR {
    childs?: Array<OKR>;
}

export interface OKR {
    id: string;
    title: string;
    category: string;
    archived: string;
    metric_name: string;
    metric_start: string;
    metric_target: string;
    parent_objective_id: string;
}
