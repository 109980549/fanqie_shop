<?php if (! defined ( 'BASEPATH' ))	exit ( 'No direct script access allowed' );
/**
 * 赞
 * @author chaituan@126.com
 */
class Zans extends MY_Model {
	function __construct() {
		parent::__construct ();
		$this->table_name = 'tie_zan';
	}
}