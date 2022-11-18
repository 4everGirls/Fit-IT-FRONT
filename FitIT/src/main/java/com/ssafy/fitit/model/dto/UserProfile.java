package com.ssafy.fitit.model.dto;

public class UserProfile {

    private int profileNo;
    private int userNo;
    private String imageLocation;
    private String imageOriginalFilename;

    public UserProfile() {
    }

    public int getProfileNo() {
        return profileNo;
    }

    public void setProfileNo(int profileNo) {
        this.profileNo = profileNo;
    }

    public int getUserNo() {
        return userNo;
    }

    public void setUserNo(int userNo) {
        this.userNo = userNo;
    }

    public String getImageLocation() {
        return imageLocation;
    }

    public void setImageLocation(String imageLocation) {
        this.imageLocation = imageLocation;
    }

    public String getImageOriginalFilename() {
        return imageOriginalFilename;
    }

    public void setImageOriginalFilename(String imageOriginalFilename) {
        this.imageOriginalFilename = imageOriginalFilename;
    }
}
