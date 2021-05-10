<?php
include_once "./include/dbconnect.php";
class regClass{
    function regClass()
    {
        $this->dbconnect=new dbconnect();
    }
    function insert()
    {
        $sql="INSERT INTO `tbl_register`( `username`, `password`, `name`) VALUES ('$this->email','$this->password','$this->name')";
        $ret=$this->dbconnect->query($sql);
        return $ret;
    }
    function view()
    {
        $selectSql="SELECT * FROM `tbl_register`";
        $ret=$this->dbconnect->query($selectSql);
        return $ret;
    }
}
