package com.entity.view;

import com.entity.ZhibudongtaiEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 支部动态
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2022-04-28 20:16:25
 */
@TableName("zhibudongtai")
public class ZhibudongtaiView  extends ZhibudongtaiEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public ZhibudongtaiView(){
	}
 
 	public ZhibudongtaiView(ZhibudongtaiEntity zhibudongtaiEntity){
 	try {
			BeanUtils.copyProperties(this, zhibudongtaiEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}