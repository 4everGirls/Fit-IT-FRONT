package com.ssafy.fitit.model.dto;

import java.sql.Timestamp;

public class MissionComplete {

    private int missionCompleteNo;
    private int challengeNo;
    private int missionNo;
    private int participantNo;
    private String iscomplete;
    private Timestamp viewStartDate;


    public MissionComplete() {
    }

    public MissionComplete(int missionCompleteNo, int challengeNo, int missionNo, int participantNo, String iscomplete, Timestamp viewStartDate) {
        this.missionCompleteNo = missionCompleteNo;
        this.challengeNo = challengeNo;
        this.missionNo = missionNo;
        this.participantNo = participantNo;
        this.iscomplete = iscomplete;
        this.viewStartDate = viewStartDate;
    }
}
