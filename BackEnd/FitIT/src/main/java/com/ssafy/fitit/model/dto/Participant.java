package com.ssafy.fitit.model.dto;

import java.sql.Timestamp;

public class Participant {

    private int participantNo;
    private int challengeNo;
    private int userNo;
    private Timestamp participateDate;
    private String challengeComplete;

    public Participant() {
    }

    public int getParticipantNo() {
        return participantNo;
    }

    public void setParticipantNo(int participantNo) {
        this.participantNo = participantNo;
    }

    public int getChallengeNo() {
        return challengeNo;
    }

    public void setChallengeNo(int challengeNo) {
        this.challengeNo = challengeNo;
    }

    public int getUserNo() {
        return userNo;
    }

    public void setUserNo(int userNo) {
        this.userNo = userNo;
    }

    public Timestamp getParticipateDate() {
        return participateDate;
    }

    public void setParticipateDate(Timestamp participateDate) {
        this.participateDate = participateDate;
    }

    public String getChallengeComplete() {
        return challengeComplete;
    }

    public void setChallengeComplete(String challengeComplete) {
        this.challengeComplete = challengeComplete;
    }
}
